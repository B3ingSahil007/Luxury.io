import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({setToken}) => {
    return (
        <>
            <div className="container sticky-top bg-[#242424] z-50">
                <div className='flex items-center justify-between py-4 font-medium'>
                    <NavLink style={{ fontSize: '20px' }} className="navbar-brand prata-regular" to="/">Luxury.io</NavLink>
                    <button onClick={()=>setToken('')} className='text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm btn bg-black border-gray-500 border-1'>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
