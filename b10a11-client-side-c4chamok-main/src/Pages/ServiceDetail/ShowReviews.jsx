import React from 'react';
import ReactStars from 'react-stars';

const ShowReviews = ({ reviews, loading }) => {

    if (loading) {
        return (
            <div className='flex justify-center w-full min-h-screen'>
                <span className="loading loading-dots loading-lg"></span>
            </div>);
    }

    return (
        <div className="mt-8 space-y-6">
            {/* Review Cards */}

            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="flex space-x-4 border-b pb-4"
                >
                    <img
                        src={review.photo}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.postedDate}</div>
                        <div className="flex items-center">
                            <ReactStars
                                value={review.rating}
                                size={30}
                                edit={false}
                            ></ReactStars>
                        </div>
                        <p className="text-gray-700 mt-2">{review.reviewText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowReviews;