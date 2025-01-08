import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import ReactStars from 'react-stars';
import ServiceReviews from './ServiceReviews';
import { div } from 'motion/react-client';
import { BiArrowToRight, BiRightArrow } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';

const ServiceDetail = () => {
    const { _id, title, companyName, website, category, price, description, rating, image } = useLoaderData()[0];
    console.log(useLoaderData());
    const [reviews, setReviews] = useState([]);

    document.title = `RatePal || ${title} `
   
    return (
        <div className='w-[90%] mx-auto'>
            <div className=' mt-8 border-b border-gray-300 flex items-start justify-between'>
                <div className='flex items-start w-[57%]'>
                    <img src={image} className='size-[200px] mr-7' alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>{title} </h1>
                        <span className='mt-3 font-semibold -mb-4 text-gray-500'>Reviews {rating.reviewedBy} </span>
                        <div className='flex items-center'>

                            <ReactStars
                                count={5}
                                value={rating.averageRating}

                                edit={false}
                                size={50}
                            ></ReactStars>
                            <p className='ml-5 text-gray-600 text-xl '>{rating.averageRating} </p>
                        </div>
                        <span className="text-gray-700 text-xl">price: {price} tk</span>
                    </div>
                </div>
                <a
                    className=' border-green-500 border rounded-lg p-5 w-[37%] flex justify-between items-center hover:bg-green-400 active:scale-95 hover:text-white text-xl'
                    href={website}
                    target='_blank'
                >
                    {website.replace('https://', '').replace('/', '')}
                    <IoArrowForward></IoArrowForward>
                </a>
            </div>
            <div className='flex items-start justify-between'>
                <div className='w-[60%]'>
                    <ServiceReviews serviceId={_id} reviews={reviews} setReviews={setReviews}></ServiceReviews>
                </div>
                <div className='w-[38%]'>
                    <h1 className='text-3xl mt-16'>Service details</h1>
                    <div className='border mt-3 border-gray-300 rounded-lg flex flex-col'>
                        <span className="text-3xl p-4 font-bold">  {companyName} </span>
                        
                        <div className=" border-t border-gray-300">
                            <h4 className='text-2xl font-semibold'>Description : </h4>
                            {description} 
                            </div>

                    </div>


                </div>

            </div>
        </div>

    );
};

export default ServiceDetail;