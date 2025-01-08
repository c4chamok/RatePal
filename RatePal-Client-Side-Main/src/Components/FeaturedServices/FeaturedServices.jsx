import React from 'react';
import { Link, useLoaderData } from 'react-router';
import FeaturedCard from './FeaturedCard';

const FeaturedServices = () => {
    const services = useLoaderData();
    return (
        <div className="mt-7 flex flex-col items-center">
            <div className="w-[90%] text-center">
                <h1 className="text-4xl font-bold text-gray-800">Featured Services</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Explore our most popular services, rated and reviewed by our trusted users.
                </p>
            </div>
            <div className='w-[85%] flex justify-end'>
                <Link className='border-indigo-400 border px-4 py-2 rounded-[50px] active:scale-95  hover:bg-indigo-400 ' to={'/allservices'}>See All</Link>
            </div>
            <div className="mt-10 w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <FeaturedCard key={service._id} service={service} />
                ))}
            </div>
        </div>

    );
};

export default FeaturedServices;