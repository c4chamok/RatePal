import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import ShowReviews from './ShowReviews';

const ServiceReviews = ({ serviceId, reviews, setReviews }) => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(true);
    console.log(reviews);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://rate-pal-server.vercel.app/reviewsbyservice/${serviceId}`);
            setReviews(response.data);
        } catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);



    const handleSubmitReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = {
            serviceId: serviceId,
            email: user.email,
            postedDate: new Date(),
            rating: rating,
            reviewText: form.reviewText.value,
        };  
        axios.post('https://rate-pal-server.vercel.app/reviews', review, { withCredentials: true })
            .then((res) => {
                console.log(res);
                fetchReviews();

            });
    };

    return (
        <div className=" mt-10">
            <h2 className="text-3xl font-semibold text-center">Reviews</h2>

            {/* Review Form */}
            <form onSubmit={handleSubmitReview} className="mt-10 p-6 border rounded-lg shadow-sm bg-white">
                <h3 className="text-2xl font-semibold mb-4">Post Your Review</h3>
                <textarea
                    name="reviewText"
                    className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your review here..."
                    rows="4"
                />

                <div className="mt-4">
                    <ReactStars
                        onChange={(value) => setRating(value)}
                        count={5}
                        value={rating.averageRating}
                        size={30}

                    ></ReactStars>
                </div>

               <div>
               <button
                    type="submit"
                    className="mt-6  bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
                >
                    Submit Review
                </button>
                <button type='button' onClick={fetchReviews} className="mt-6 ml-4 bg-pink-400 text-white p-3 rounded-md hover:bg-pink-500">Refresh Reviews
                </button>
               </div>
            </form>
        
            {/* Review Cards */} 

            <ShowReviews reviews={reviews} loading={loading}></ShowReviews>
           
        </div>
    );
};

export default ServiceReviews;




