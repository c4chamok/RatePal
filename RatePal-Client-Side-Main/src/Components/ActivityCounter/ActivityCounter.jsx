import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const ActivityCounter = () => {
    const [activities, setActivities] = useState({});

    useEffect(() => {
        axios.get('https://rate-pal-server.vercel.app/activitycount').then((res) => {
            setActivities(res.data);
        });
    }, []);

    return (
        <div className="flex flex-col items-center my-16 bg-gray-100 py-10">
            <div className="text-center mb-10 px-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Your Opinions Shape the Future!
                </h1>
                <p className="text-lg text-gray-600">
                    By sharing your reviews and experiences, you're empowering service providers to grow and improve.
                </p>
            </div>
            <div className="w-11/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-green-500 mb-2">
                        <CountUp end={activities.serviceCount} duration={7} />
                    </h2>
                    <p className="text-xl text-gray-700">Services Reviewed</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-blue-500 mb-2">
                        <CountUp end={activities.usersCount} duration={7} />
                    </h2>
                    <p className="text-xl text-gray-700">Total Users</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-purple-500 mb-2">
                        <CountUp end={activities.reviewsCount} duration={7} />
                    </h2>
                    <p className="text-xl text-gray-700">Reviews Submitted</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityCounter;
