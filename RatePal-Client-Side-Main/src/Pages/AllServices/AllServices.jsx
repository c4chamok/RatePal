import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import { useLocation } from 'react-router';
import { div } from 'motion/react-client';
import { AuthContext } from '../../Contexts/AuthProvider';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sort , setSort] = useState("")
    const {searchText, setSearchText} = useContext(AuthContext)
    document.title = "RatePal | All Services";
    const [categories,setCategories] = useState([])
    console.log(sort.split(":"));

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`https://rate-pal-server.vercel.app/services?searchText=${searchText ?
                    searchText : ''}&category=${selectedCategory === 'All' ? '' : selectedCategory}&sortby=${sort.split(":")[0]}&order=${sort.split(":")[1]}`);
                setServices(response.data.services);
                setCategories(['All',...response.data.categories]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [searchText, selectedCategory,sort]);

    if (loading) return (
        <div className='flex justify-center w-full min-h-screen'>
            <span className="loading loading-dots loading-lg"></span>
        </div>);
    if (error) return <p className='min-h-screen'>Error: {error}</p>;

    return (
        <div className="mt-10 px-6 flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">All Services</h1>
                <p className="text-gray-600 mt-2">
                    Browse through our wide range of services. Select a category to filter.
                </p>
            </div>
            <div className="w-[89%] flex justify-between mt-6">
                <select
                    value={sort}
                    onChange={(e)=>setSort(e.target.value)}
                    className="bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >   
                    <option value="" disabled>Sort ...</option>
                    <option value="rating:-1">sort by rating (H to L)</option>
                    <option value="rating:1">sort by rating (L to H)</option>
                    <option value="price:-1">sort by price (H to L)</option>
                    <option value="price:1">sort by price (L to H)</option>
                </select>
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSearchText('')
                    }}
                    className="bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-3 w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;