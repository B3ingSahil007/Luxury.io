import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/frontend_assets/assets'
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoArrowBackOutline } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext)
    return (
        <>
            <div className="container sticky-top bg-[#242424] z-50">
                <div className='flex items-center justify-between py-4 font-medium'>
                    <NavLink style={{ fontSize: '20px' }} className="navbar-brand prata-regular" to="/">Luxury.io</NavLink>
                    <ul className="hidden sm:flex gap-5 text-sm text-white">
                        <NavLink className='flex flex-col navlink items-center gap-1' to="/">
                            <li>Home</li>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-200 hidden' />
                        </NavLink>
                        <NavLink className='flex flex-col navlink items-center gap-1' to="/collection">
                            <li>Collections</li>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-200 hidden' />
                        </NavLink>
                        <NavLink className='flex flex-col navlink items-center gap-1' to="/about">
                            <li>About</li>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-200 hidden' />
                        </NavLink>
                        <NavLink className='flex flex-col navlink items-center gap-1' to="/contact">
                            <li>Contact</li>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-200 hidden' />
                        </NavLink>
                    </ul>
                    <div className='flex gap-3'>
                        <IoMdSearch onClick={() => setShowSearch(!showSearch)} style={{ cursor: 'pointer', fontSize: '23px' }} />
                        <div className="group relative">
                            <Link to={'/login'}><FaUserAlt className='mt-0.5 cursor-pointer w-5' /></Link>
                            <div className='group-hover:block bg-dark border-1 mt-1 border-white hidden absolute dropdown-menu right-0'>
                                <div className="flex flex-col mx-5 w-36 py-1 text-white rounded">
                                    <li className='hover:text-gray-500 justify-center flex py-2 cursor-pointer'>My Profile</li>
                                    <li className='hover:text-gray-500 justify-center flex py-2 cursor-pointer'>My Orders</li>
                                    <li className='hover:text-gray-500 justify-center flex py-2 cursor-pointer'>Log-Out</li>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: '22px' }} className="relative cursor-pointer">
                            <NavLink to={'/cart'}>
                                <IoMdCart />
                                {getCartCount() > 0 && (
                                    <p className='absolute right-[-8px] bottom-[1px] border-white border w-5 text-center leading-4 bg-dark text-light rounded-full text-[8px]'>
                                        {getCartCount()}
                                    </p>
                                )}
                            </NavLink>
                        </div>
                        <CgMenuRightAlt onClick={() => { setVisible(true) }} style={{ fontSize: '30px' }} className='w-6 cursor-pointer sm:hidden' />
                    </div>
                    {/* SideBar Menu */}
                    <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-dark text-light transition-all ${visible ? 'w-72 z-50' : 'w-0'}`}>
                        <div className="flex flex-col text-gray-600">
                            <div onClick={() => { setVisible(false) }} className="flex items-center gap-4 p-3">
                                <IoArrowBackOutline onClick={() => { setVisible(true) }} style={{ fontSize: '20px' }} className='h-10 text-gray-50' />
                            </div>
                            <ul className="sm:flex gap-5 text-sm text-white">
                                <NavLink onClick={() => { setVisible(false) }} className='flex flex-col items-center gap-0.5 py-2' to="/">
                                    <li>Home</li>
                                    <hr className='w-1/6 border-none h-[1.5px] bg-gray-50 hidden' />
                                </NavLink>
                                <NavLink onClick={() => { setVisible(false) }} className='flex flex-col items-center gap-0.5 py-2' to="/collection">
                                    <li>Collections</li>
                                    <hr className='w-1/6 border-none h-[1.5px] bg-gray-50 hidden' />
                                </NavLink>
                                <NavLink onClick={() => { setVisible(false) }} className='flex flex-col items-center gap-0.5 py-2' to="/about">
                                    <li>About</li>
                                    <hr className='w-1/6 border-none h-[1.5px] bg-gray-50 hidden' />
                                </NavLink>
                                <NavLink onClick={() => { setVisible(false) }} className='flex flex-col items-center gap-0.5 py-2' to="/contact">
                                    <li>Contact</li>
                                    <hr className='w-1/6 border-none h-[1.5px] bg-gray-50 hidden' />
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
