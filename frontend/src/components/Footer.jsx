import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div>
                <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] my-10 mt-20 text-sm">
                    <div className='mb-3'>
                        <NavLink style={{ fontSize: '20px' }} className="navbar-brand prata-regular" to="/">Luxury.io</NavLink>
                        <p className='w-full md:w-5/6 text-gray-500 mt-2'>Stay connected with us for the latest updates and exclusive offers! Subscribe to our newsletter for sneak peeks at new collections and special promotions. Follow us on social media to join our community and share your style. Thank you for being a valued part of our journey!</p>
                    </div>
                    <div className='mb-3'>
                        <p className="text-xl font-medium mb-1">Company</p>
                        <ul className="grid grid-cols-1 text-gray-500 gap-1">
                            <li className='hover:text-white cursor-pointer'>Home</li>
                            <li className='hover:text-white cursor-pointer'>Shop</li>
                            <li className='hover:text-white cursor-pointer'>About Us</li>
                            <li className='hover:text-white cursor-pointer'>Contact Us</li>
                            <li className='hover:text-white cursor-pointer'>FAQ</li>
                            <li className='hover:text-white cursor-pointer'>Blog</li>
                        </ul>
                    </div>
                    <div className='mb-3'>
                        <p className="text-xl font-medium mb-1">Company Support</p>
                        <ul className="grid grid-cols-1 text-gray-500 gap-1">
                            <li className='hover:text-white cursor-pointer'>Shipping & Delivery</li>
                            <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
                            <li className='hover:text-white cursor-pointer'>Returns & Exchanges</li>
                            <li className='hover:text-white cursor-pointer'>Terms & Conditions</li>
                            <li className='hover:text-white cursor-pointer'>Careers</li>
                        </ul>
                    </div>
                    <div className='mb-3'>
                        <p className="text-xl font-medium mb-1">Follow Us</p>
                        <ul className="grid grid-cols-1 text-gray-500 gap-1">
                            <li className='hover:text-white cursor-pointer'>LinkdIn</li>
                            <li className='hover:text-white cursor-pointer'>Github</li>
                            <li className='hover:text-white cursor-pointer'>Instagram</li>
                            <li className='hover:text-white cursor-pointer'>Facebook</li>
                            <li className='hover:text-white cursor-pointer'>Printest</li>
                        </ul>
                    </div>
                    <div className='mb-3'>
                        <p className='text-xl font-medium mb-3'>GET IN TOUCH</p>
                        <ul>
                            <span className='text-gray-500'>Mobile No : </span><li className='mb-2'>+91 9638473047</li>
                            <span className='text-gray-500'>E-Mail : </span><li className='mb-2'>chhipasahil163@gmail.com</li>
                            <span className='text-gray-500'>Address : </span><li>Ahmedabad, Gujarat</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className='py-4 text-sm text-center'>Copyright 2024 @ Luxury.io - All Right Reserved.</p>
                </div>
            </div>
            <style>
            </style>
        </>
    )
}

export default Footer
