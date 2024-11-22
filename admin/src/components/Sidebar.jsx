import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
// import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const Sidebar = () => {
    return (
        <>
            <div className='w-[18%] min-h-screen border-r-2 border-gray-500'>
                <div className='sidebar flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                    <NavLink to="/allusers" className="flex items-center gap-3 border-1 border-gray-500 border-r-0 px-3 py-2 rounded-l">
                        <FaUsers className='w-5 h-5' />
                        <p className='hidden md:block'>All Users</p>
                    </NavLink>
                    <NavLink to="/add" className="flex items-center gap-3 border-1 border-gray-500 border-r-0 px-3 py-2 rounded-l">
                        <IoIosAddCircleOutline className='w-5 h-5' />
                        <p className='hidden md:block'>Add Items</p>
                    </NavLink>
                    <NavLink to="/list" className="flex items-center gap-3 border-1 border-gray-500 border-r-0 px-3 py-2 rounded-l">
                        <LiaClipboardListSolid className='w-5 h-5' />
                        <p className='hidden md:block'>List Items</p>
                    </NavLink>
                    <NavLink to="/orders" className="flex items-center gap-3 border-1 border-gray-500 border-r-0 px-3 py-2 rounded-l">
                        <CiDeliveryTruck className='w-5 h-5' />
                        <p className='hidden md:block'>All Orders</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar
