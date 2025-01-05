import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
    const { _id,title, description, image, price, category, companyName, website, rating } = service;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description.length > 50 ? description.slice(0,50) + '...': description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {price} tk</span>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-600 text-sm">Company: {companyName}</p>
                <p className="text-gray-600 text-sm">Website: <a href={website} className="text-blue-500 underline">{companyName}</a></p>
                <div className='mt-2 flex items-center justify-between gap-2'>
                    <p className="text-gray-600 font-semibold">Rating: {rating.averageRating }</p>
                    <Link to={`/service/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        See details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;