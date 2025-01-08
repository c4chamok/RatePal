import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
import Rating from 'react-rating-stars-component';
import { div } from 'motion/react-client';
import Swal from 'sweetalert2';
import CreatableSelect from 'react-select/creatable';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectService, setSelectService] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    document.title = `RatePal || My Services`;

    useEffect(() => {
        axios.get('https://rate-pal-server.vercel.app/getcategories')
            .then(res => {
                setCategories(() => res.data.categories.map((category) => {
                    return { value: category, label: category.toUpperCase() }
                }))
            })
    }, [])

    const fetchServices = async () => {
        try {
            const response = await axios.get(`https://rate-pal-server.vercel.app/myservices?vendorEmail=${user?.email}&searchText=${searchText}`, { withCredentials: true });
            setServices(response.data);
        } catch (err) {
            if(err.response.status === 401 || err.response.status === 403){
                return logout()
            }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchServices();
    }, [user, searchText]);
    console.log(searchText);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://rate-pal-server.vercel.app/services/${id}`, { withCredentials: true })
                    .then((res) => {
                        fetchServices();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        })

                    }).catch(err=>{
                        if(err.response.status === 401 || err.response.status === 403){
                            return logout()
                        }
                    })
                    

            }
        });


    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedService = {
            title: form.title.value,
            companyName: form.companyName.value,
            category: selectedOption.value,
            price: form.price.value,
            website: form.website.value,
            description: form.description.value,
            image: form.image.value,
        };
        axios.put(`https://rate-pal-server.vercel.app/services/${selectService._id}`, updatedService, { withCredentials: true })
            .then((res) => {
                setSelectService(null);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                fetchServices();
            }).catch(err=>{
                if(err.response.status === 401 || err.response.status === 403){
                    return logout()
                }
            })
            

    };

    return (
        <div className="w-[90%] min-h-screen mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Services</h1>
            {loading ? (

                <div className='flex justify-center w-full min-h-screen'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <div className='w-[95%] flex justify-end'>
                        <label className="input  focus-within:outline-none focus-within:ring-0 input-bordered flex items-center gap-2">
                            <input
                                tabIndex={0}
                                type="text"
                                name="search"
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search for services"
                                className=" grow rounded-md w-full"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <table className="table w-full mt-4">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr className='h-full' key={service._id}>
                                    <td>
                                        <img src={service.image} alt={service.title} className="w-24 h-24 object-cover rounded-md" />
                                    </td>
                                    <td>{service.title}</td>
                                    <td>{service.companyName}</td>
                                    <td>{service.category}</td>
                                    <td>{service.price}</td>
                                    <td>
                                        <Rating
                                            count={5}
                                            value={service.rating.averageRating}
                                            size={24}
                                            isHalf={true}
                                            readonly={true}
                                            edit={false}
                                        />
                                    </td>
                                    <td className="h-full space-x-3">
                                        <button
                                            onClick={() => setSelectService(service)}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service._id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {selectService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-lg w-full grid grid-cols-2 gap-3 max-w-md">
                        <h2 className="text-2xl col-span-2 font-semibold mb-4">Update service</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Service Title:</label>
                            <input
                                type="text"
                                name="title"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.title}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Company Name:</label>
                            <input
                                type="text"
                                name="companyName"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.companyName}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Website:</label>
                            <input
                                type="text"
                                name="website"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.website}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Image:</label>
                            <input
                                type="text"
                                name="image"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.image}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Category:</label>
                            <CreatableSelect
                                isClearable
                                onChange={(value) => setSelectedOption(value)}
                                options={categories} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Price:</label>
                            <input
                                type="text"
                                name="price"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.price}
                            />
                        </div>
                        <div className='col-span-2'>
                            <label className="block text-gray-700">Description:</label>
                            <textarea
                                name="description"
                                className="mt-1 p-2 w-full border rounded"
                                defaultValue={selectService.description}
                            />
                        </div>


                        <div className="mt-6 flex space-x-4 col-span-2">
                            <button
                                type='submit'
                                className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                            >
                                Save
                            </button>
                            <button
                                type='button'
                                onClick={() => setSelectService(null)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MyServices;