import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider';
import Searchbar from '../Searchbar/Searchbar'



const Navbar = () => {
    const { user, logout, showSearchbar, setShowSearchbar } = useContext(AuthContext);
    const [isNavBg, setIsNavBg] = useState()


    const handleScroll = () => {
        if (window.scrollY > 450) {
            setIsNavBg(true);
        } else {
            setIsNavBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`flex sticky top-0 z-10 ${isNavBg ? "bg-gradient-to-r from-green-100 to-slate-100" : "bg-slate-100/50"}  flex-col items-center`}>
            <div className="navbar w-[98%] justify-between relative z-10 ">
                <div className="flex items-center md:gap-5">
                    <Link to={'/'} className="text-2xl font-bold bg-gradient-text mr-3 text-green-400">RatePal</Link>
                    {showSearchbar && <Searchbar></Searchbar>}
                </div>
                <div className="relative flex gap-5 items-center">
                    <div className='lg:flex hidden items-center gap-2'>
                        <NavLink
                            className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                            to={'/'}>Home</NavLink>
                        <NavLink
                            className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                            to={'/allservices'}>Services</NavLink>
                        <NavLink
                            className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                            to={'/aboutus'}>About</NavLink>
                        {user &&
                            <div className='flex items-center gap-2'>
                                <NavLink
                                    className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                    to={'/addservice'}> Add Service</NavLink>
                                <NavLink
                                    className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px]  '
                                    to={'/myservices'}>My Services</NavLink>
                                <NavLink
                                    className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                    to={'/myreviews'}>My Reviews</NavLink>
                            </div>
                        }
                    </div>
                    {!user && <div className='flex gap-4 items-center mr-12'>
                        <Link to={'/login'} className='px-6 py-2 rounded-[50px] border border-gray-400 text-slate-400-400 hover:bg-slate-900 hover:text-white'>Login</Link>
                        <Link to={'/register'} className='px-6 py-2 rounded-[50px] border border-indigo-400 text-slate-800 hover:text-white hover:bg-indigo-400'>Register</Link>
                    </div>}
                    <div className="dropdown">
                        {user &&
                            <span className="flex items-center gap-2 relative ml-2 md:mr-12">
                                <div className="relative group">
                                    <div className="cursor-pointer">
                                        <img
                                            tabIndex={0}
                                            className="h-10 w-10 rounded-full"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                            </span>
                        }
                        <div
                            className="right-5 dropdown-content menu-dropdown  bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {
                                user &&
                                <div className='flex flex-col items-center justify-center pb-2 mb-2 border-b'>
                                    <div className='text-xl text-gray-900 font-semibold'> {user?.displayName}</div>
                                </div>
                            }
                            <div className='flex flex-col'>
                                <NavLink

                                    className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                    to={'/'}>Home</NavLink>
                                <NavLink
                                    className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                    to={'/allservices'}>Services</NavLink>
                            </div>
                            {user &&
                                <div className='flex flex-col'>
                                    <NavLink
                                        className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                        to={'/addservice'}> Add Service</NavLink>
                                    <NavLink
                                        className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px]  '
                                        to={'/myservices'}>My Services</NavLink>
                                    <NavLink
                                        className='px-4 py-2 font-semibold hover:bg-green-100 hover:text-gray-800 rounded-[50px] '
                                        to={'/myreviews'}>My Reviews</NavLink>
                                    <div className='w-full'>
                                        {user ?
                                            <button onClick={logout} className="btn w-full px-6">Logout</button>
                                            :
                                            <Link to={'/login'} className='btn px-6'>Login</Link>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;