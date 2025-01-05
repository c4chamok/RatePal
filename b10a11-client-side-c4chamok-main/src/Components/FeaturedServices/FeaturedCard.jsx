import React from 'react';
import ReactRating from 'react-rating-stars-component'
import { Link } from 'react-router';


const FeaturedCard = ({ service }) => {
    return (
        <div className='p-5 flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300'>
            <img className='size-24' src={service.image} />
            <h2 className='text-xl'>{service.title}</h2>
            <p className='text-sm text-gray-500'>{service.description.length > 50 ? service.description.slice(0,50) + '...': service.description}</p>
            <span className='flex items-center gap-2'>
                <ReactRating
                   count={5}
                   value={service.rating.averageRating}
                   size={30}
                ></ReactRating>
                <p> {service.rating.averageRating}/5 ({service.rating.reviewedBy})</p>
            </span>
            <div className='flex items-center gap-10 mt-3'>
                <span className='bg-gray-400 py px-3 rounded-xl font-semibold'>{service.price} tk</span>
                <Link to={`/service/${service._id}`} className='rounded-[50px] px-4 py-2 text-white font-semibold bg-[#3FD078]'>See Details</Link>
            </div>
        </div>
    );
};

export default FeaturedCard;