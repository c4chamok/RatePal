require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASS}@cluster-crud1.0ugo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-CRUD1`;

const port = process.env.PORT || 5800;
const app = express();

app.use(cors(
    {
        origin: ['http://localhost:3000', 'http://localhost:5173', 'https://ratepal-4cd33.web.app', 'https://ratepal-4cd33.firebaseapp.com'],
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
    if (!req.cookies.token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    })
}


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

async function run() {
    try {


        const database = client.db("RatePalDB");
        const services = database.collection("Services");
        const users = database.collection("Users");
        const reviews = database.collection("Reviews");

        const ratingUpdate = async (serviceId) => {
            const reviewList = await reviews.find({ serviceId: serviceId }).toArray();
            const reviewedBy = reviewList.length;
            let totalRating = 0;
            for (let review of reviewList) {
                const rating = review.rating;
                totalRating = totalRating + rating;
            }
            const averageRating = totalRating / reviewedBy;
            const averageRating1fraction = averageRating.toFixed(1);
            await services.updateOne({ _id: new ObjectId(serviceId) }, { $set: { rating: { averageRating: averageRating1fraction, reviewedBy: reviewedBy } } });

        }


        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '5h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            })
                .send({ success: true });
        });

        app.delete('/jwt', async (req, res) => {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            }).send({ success: true });
        });

        app.post('/services', verifyToken, async (req, res) => {
            if (req.user.email !== req.body.vendorEmail) {
                return res.status(403).json({ message: 'forbidden' });
            }
            const result = await services.insertOne(req.body);
            res.json(result);
        });

        app.get('/services', async (req, res) => {
            const { searchText, category, sortby, order } = req.query;
            const query = searchText ? {
                $or: [
                    { title: { $regex: searchText, $options: 'i' } },
                    { category: { $regex: searchText, $options: 'i' } },
                    { companyName: { $regex: searchText, $options: 'i' } },
                ]
            } 
            :category ? { category: category }
            : {};
            const options = (sortby && order)? {
                sort: sortby === "rating"? { "rating.averageRating": order } 
                : sortby === "price" ?{ "price" : order}
                : {}
            } : {}
            const service = await services.find(query, options).toArray();
            const categories = await services.distinct('category');
            res.send({services:service,categories});
        })

        app.get('/servicedetail', async (req, res) => {
            const { id } = req.query;
            if (id) {
                const query = {_id: new ObjectId(id)}
                const service = await services.find(query).toArray();
                res.send(service);
            }
            else{
                res.status(404).send({message : "not found"})
            }
        })

        app.get('/featuredservices', async (req, res) => {
            const query = {}
            const options = {
                sort: { "rating.averageRating": -1 }
            }
            const service = await services.find(query, options).limit(6).toArray();
            res.send(service)
        })

        app.get('/searchservices', async (req, res) => {
            const { searchText } = req.query;
            const query = {
                $or: [
                    { title: { $regex: searchText, $options: 'i' } },
                    { category: { $regex: searchText, $options: 'i' } },
                    { companyName: { $regex: searchText, $options: 'i' } },
                ]
            };
            const service = await services.find(query).limit(4).toArray();
            res.send(service);
        })

        app.get('/myservices', verifyToken, async (req, res) => {
            const { vendorEmail, searchText } = req.query;
            if (req.user.email !== vendorEmail) {
                return res.status(403).json({ message: 'forbidden' });
            }
            const query = vendorEmail ? { vendorEmail: vendorEmail } : {};
            if(searchText){
                query.title = { $regex: searchText, $options: 'i' }
            }
            const userServices = await services.find(query).toArray();
            res.send(userServices);
        })

        app.put('/services/:id', verifyToken, async (req, res) => {
            const singleService = await services.findOne({ _id: new ObjectId(req.params.id) });
            if (req.user.email !== singleService.vendorEmail) {
                return res.status(403).json({ message: 'forbidden' });
            }
            const { id } = req.params;
            const result = await services.updateOne({ _id: new ObjectId(id) }, { $set: req.body });
            res.json(result);
        });

        app.delete('/services/:id', verifyToken, async (req, res) => {
            const singleService = await services.findOne({ _id: new ObjectId(req.params.id) });
            if (req.user.email !== singleService.vendorEmail) {
                return res.status(403).json({ message: 'forbidden' });
            }
            const { id } = req.params;
            const result = await services.deleteOne({ _id: new ObjectId(id) });
            res.json(result);
        })

        app.post('/users', async (req, res) => {
            const existingUser = await users.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const result = await users.insertOne(req.body);
            res.json(result);
        });

        app.post('/reviews', verifyToken, async (req, res) => {
            if (req.user.email !== req.body.email) {
                return res.status(403).json({ message: 'forbidden' });
            }
            try {
                const result = await reviews.insertOne(req.body);
                res.json(result);

            } finally {
                ratingUpdate(req.body.serviceId);
            }
        });

        app.put('/reviews/:id', verifyToken, async (req, res) => {
            const singleReview = await reviews.findOne({ _id: new ObjectId(req.params.id) });
            if (req.user.email !== singleReview.email) {
                return res.status(403).json({ message: 'forbidden' });
            }
            try {
                const { id } = req.params;
                const result = await reviews.updateOne({ _id: new ObjectId(id) }, { $set: req.body });
                res.json(result);

            } finally {
                ratingUpdate(req.body.serviceId);
            }
        });

        app.delete('/reviews/:id', verifyToken, async (req, res) => {
            const { id } = req.params;
            const review = await reviews.findOne({ _id: new ObjectId(id) });
            if (req.user.email !== review.email) {
                return res.status(403).json({ message: 'forbidden' });
            }
            try {
                const result = await reviews.deleteOne({ _id: new ObjectId(id) });
                res.json(result);
            } finally {
                ratingUpdate(review.serviceId);
            }
        });

        app.get('/reviewsbyservice/:id?', async (req, res) => {
            const { id } = req.params;
            const query = id ? { serviceId: id } : {};
            const serviceReviews = await reviews.find(query).toArray();
            const customerEmails = [...new Set(serviceReviews.map(review => review.email))];
            const customers = await users.find({ email: { $in: customerEmails } }).toArray();
            const reviewsWithCustomerDetails = serviceReviews.map(review => {
                const customer = customers.find(user => user.email === review.email);
                return { ...review, ...customer };
            });
            res.send(reviewsWithCustomerDetails);
        })

        app.get('/reviewsbyuser/:email?', verifyToken, async (req, res) => {
            if (req.user.email !== req.params.email) {
                return res.status(403).json({ message: 'forbidden' });
            }

            const { email } = req.params;
            const query = email ? { email: email } : {};
            const userReviews = await reviews.find(query).toArray();
            const serviceIds = [...new Set(userReviews.map(review => review.serviceId))];
            const objectServiceIds = serviceIds.map(id => new ObjectId(id));
            const filteredServices = await services.find({ _id: { $in: objectServiceIds } })
                .project({ _id: 1, title: 1, companyName: 1, image: 1, category: 1 })
                .toArray();
            const reviewsWithServiceDetails = userReviews.map(review => {
                const { _id, title, companyName, image, category } = filteredServices.find(service => service._id.toString() === review.serviceId);
                return { ...review, title, companyName, image, category };
            });
            res.send(reviewsWithServiceDetails);
        })

        app.get('/activitycount', async (req, res) => {
            const serviceCount = await services.countDocuments();
            const usersCount = await users.countDocuments();
            const reviewsCount = await reviews.countDocuments();
            res.json({ serviceCount, usersCount, reviewsCount })
        })

        app.get('/getcategories',async (req, res) => {
            const categories = await services.distinct('category');
            res.send({categories:categories})
        })

    } finally {

    }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});