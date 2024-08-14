import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo-img.png';

export default function AppBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    function handleOrderHistory() {
        setIsSidebarOpen(false);
        navigate('/orders');
    }

    function handleIngredients() {
        setIsSidebarOpen(false);
        navigate('/ingredients');
    }

    function handleHome() {
        setIsSidebarOpen(false);
        navigate('/');
    }

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="container mx-auto py-2 px-6 bg-[#00712D] flex justify-between items-center">

            <div className='bg-[#00712D] flex items-center gap-2' onClick={handleHome}>
                <img className='bg-[#00712D] h-10 w-auto' src={logo} alt="" />
                <h1 className="text-[#FFFBE6] text-xl font-bold bg-[#00712D] sm:text-2xl">
                    Brrrgrrr
                </h1>
            </div>

            {/* For mobile/tablet */}
            <div className="bg-[#00712D] md:hidden">
                <FiMenu
                    className="text-white bg-[#00712D] cursor-pointer"
                    size={24}
                    onClick={toggleSidebar}
                />
            </div>

            {/* Navigation links */}
            <ul className='hidden md:flex gap-8 bg-[#00712D]'>
                <li
                    className='font-semibold text-white bg-[#00712D] cursor-pointer hover:text-[#D5ED9F] active:text-[#D5ED9F] focus:text-[#D5ED9F]'
                    onClick={handleHome}
                >
                    Home
                </li>
                <li
                    className='font-semibold text-white bg-[#00712D] cursor-pointer hover:text-[#D5ED9F] active:text-[#D5ED9F] focus:text-[#D5ED9F]'
                    onClick={handleOrderHistory}
                >
                    Order History
                </li>
                <li
                    className='font-semibold text-white bg-[#00712D] cursor-pointer hover:text-[#D5ED9F] active:text-[#D5ED9F] focus:text-[#D5ED9F]'
                    onClick={handleIngredients}
                >
                    Ingredients
                </li>
            </ul>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}>
                    <div className="fixed left-0 top-0 w-64 h-full bg-[#00712D] p-5 z-50">
                        <ul className='bg-[#00712D] flex flex-col gap-5'>
                            <li
                                className='bg-[#00712D] font-semibold text-white cursor-pointer hover:text-[#D5ED9F]'
                                onClick={handleHome}
                            >
                                Home
                            </li>
                            <li
                                className='bg-[#00712D] font-semibold text-white cursor-pointer hover:text-[#D5ED9F]'
                                onClick={handleOrderHistory}
                            >
                                Order History
                            </li>
                            <li
                                className='bg-[#00712D] font-semibold text-white cursor-pointer hover:text-[#D5ED9F]'
                                onClick={handleIngredients}
                            >
                                Ingredients
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
