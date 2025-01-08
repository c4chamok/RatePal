import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react"
import "swiper/css";
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import mobileRating from '../../assets/Animation - 1735113129067.json'
import Lottie from "lottie-react";
import { div } from "motion/react-client";


const Banner = () => {
    return (
        <div className="h-[500px]">
            <div className="absolute top-0 z-0 w-full">
                <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-10">
                    <button
                        className="swiper-button-prev flex items-center justify-center bg-gray-800/60 text-white rounded-full p-2 hover:bg-gray-600 size-12"
                        aria-label="Previous Slide"
                    >
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
                    <button
                        className="swiper-button-next flex items-center justify-center bg-gray-800/60 text-white rounded-full p-2 hover:bg-gray-600 size-12"
                        aria-label="Next Slide"
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className=" shadow-lg overflow-hidden w-full"
                >
                    <SwiperSlide className="flex items-center justify-center   h-full">
                        <div className="h-[500px] relative">

                            <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-green-500 overflow-hidden flex items-center justify-center">
                                <motion.div
                                    className="absolute w-20 h-20 bg-pink-300 rounded-full top-10 left-10"
                                    animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                />
                                <motion.div
                                    className="absolute w-16 h-16 bg-yellow-300 rounded-full bottom-20 right-20"
                                    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                />
                                <motion.div
                                    className="absolute w-12 h-12 bg-purple-300 rounded-full top-20 right-40"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                                <div className="text-center text-white z-10">
                                    <h1 className="text-4xl font-bold mb-4">Welcome to RatePlal</h1>
                                    <p className="text-lg">
                                        Your trusted platform for genuine reviews and ratings.
                                    </p>
                                    <button
                                        className="mt-6 px-6 py-3 hover:scale-110 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-100  transition duration-300"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className="flex items-center justify-center bg-gray-100">
                        <div className="h-[500px] w-full flex items-center justify-between px-8">
                            <div className="ml-10">
                                <h2 className="text-5xl font-bold text-gray-800">
                                    Rate. Review. Discover.
                                </h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    Explore top-rated services and share your experience with the world.
                                    Join thousands of users on <span className="text-indigo-600">RatePal</span>.
                                </p>
                                <a
                                    className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition"
                                >
                                    Start Rating Now
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <Lottie
                                    style={{ width: "500px", height: "400px" }}
                                    animationData={mobileRating}
                                    loop={true}
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="h-[500px] relative">
                            <div className="relative w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 overflow-hidden flex items-center justify-center">
                                <motion.div
                                    className="absolute w-24 h-24 bg-blue-300 rounded-lg top-10 left-20"
                                    animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                />
                                <motion.div
                                    className="absolute w-20 h-20 bg-green-300 rounded-lg bottom-16 right-24"
                                    animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                />
                                <motion.div
                                    className="absolute w-14 h-14 bg-yellow-300 rounded-lg top-32 left-1/2 transform -translate-x-1/2"
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                />
                                <div className="text-center text-white z-10 px-4">
                                    <h1 className="text-5xl font-extrabold mb-4">Discover Trusted Services</h1>
                                    <p className="text-lg font-light">
                                        Explore ratings, reviews, and insights to make confident decisions.
                                    </p>
                                    <button
                                        className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg shadow-lg hover:scale-110 hover:text-[#4C51BF] hover:bg-purple-200 transition duration-300"
                                    >
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;