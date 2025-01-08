import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReactStars from "react-rating-stars-component";
import ShowUserReviews from './ShowUserReviews';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(true);

        document.title = `RatePal || My Reviews `

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://rate-pal-server.vercel.app/reviewsbyuser/${user?.email}`, { withCredentials: true });
            setReviews(response.data);
        } catch (err) {
            if( err.response.status === 403){
                return logout()
            }
        }
        finally {
            setLoading(false);
        }
    };

    console.log(reviews);

    useEffect(() => {
        fetchReviews();
    }, [user]);

    const handleUpdate = (review) => {
        setSelectedReview(review);
    }
    const handleDelete = (review) => {
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
                axios.delete(`https://rate-pal-server.vercel.app/reviews/${review._id}`, { withCredentials: true })
            .then((res) => {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                setSelectedReview(null);
                fetchReviews();
            }).catch(err=>{
                if( err.response.status === 403){
                    return logout()
                }
            });
                
            }
        });
        
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedReview = {
            serviceId: selectedReview.serviceId,
            reviewText: form.reviewText.value,
            rating: rating,
        };
        axios.put(`https://rate-pal-server.vercel.app/reviews/${selectedReview._id}`, updatedReview, { withCredentials: true })
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setSelectedReview(null);
                fetchReviews();
            }).catch(err=>{
                if( err.response.status === 403){
                    return logout()
                }
            })
    }

    return (
        <div className="w-[80%] min-h-screen mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold text-center">My Reviews</h1>
            <ShowUserReviews
                reviews={reviews}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                loading={loading}
            />
            {selectedReview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form onSubmit={handleUpdateSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">Update Review</h2>
                        <textarea
                            name="reviewText"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Update your review..."
                            rows="4"
                            defaultValue={selectedReview.reviewText}
                        />
                        <div className="mt-4 flex items-center space-x-2">
                            {
                                <ReactStars
                                    count={5}
                                    value={selectedReview.rating}
                                    size={30}
                                    onChange={(value) => { setRating(value)}}

                                />
                            }
                        </div>
                        <div className="mt-6 flex space-x-4">
                            <button
                                type='submit'
                                className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setSelectedReview(null)}
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

export default MyReviews;