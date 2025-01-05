import React from 'react';
import ReactStars from "react-rating-stars-component";

const ShowUserReviews = ({ reviews, handleUpdate, handleDelete, loading }) => {
    if (loading) {
        return (
            <div className="flex justify-center w-full min-h-screen">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (!loading && reviews.length === 0) {
        return (
            <div className="text-center mt-6">
                <p className="text-gray-500">No reviews available.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 space-y-6">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="border rounded-lg shadow-md p-4 bg-white flex flex-col md:flex-row items-center hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                        src={review.image}
                        className="size-[150px] rounded-md"
                    />
                    <div className="flex md:w-4/12 flex-col itc justify-between p-4 flex-grow">
                        <div>
                            <h2 className="text-lg font-semibold">{review.title}</h2>
                            <p className="text-gray-600">{review.companyName}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(review.postedDate).toLocaleDateString()}
                            </p>
                            <div className="flex items-center mt-2">
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    size={24}
                                    edit={false}
                                />
                            </div>
                            <p className="text-gray-700 mt-2">
                                {review.reviewText.length > 100
                                    ? `${review.reviewText.slice(0, 100)}...`
                                    : review.reviewText}
                            </p>
                        </div>
                       
                    </div>
                    <div className="flex md:flex-col gap-7 md:items-start w-full md:w-2/12">
                            <button
                                onClick={() => handleUpdate(review)}
                                className=" w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(review)}
                                className=" w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default ShowUserReviews;
