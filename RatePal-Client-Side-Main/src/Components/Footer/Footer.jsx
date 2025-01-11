import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaX, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#28282B] mt-7 pt-8 pb-1">
            <div className="w-11/12 flex flex-col items-center px-6 mx-auto mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start text-white">
                    <div className="w-full  mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold text-green-400">Ratepal</h1>
                        <p className="mt-4 text-gray-400">
                            Your trusted platform for genuine reviews and ratings. Helping millions make better decisions every day.
                        </p>
                    </div>
                    <div className="w-full  mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/aboutus" className="text-gray-400 hover:text-green-400 transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-400 hover:text-green-400 transition">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition"
                            >
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition"
                            >
                                <FaInstagram></FaInstagram>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition"
                            >
                               <FaLinkedin></FaLinkedin>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8  text-sm text-gray-500">
                    <p>© 2024 Ratepal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
