import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoMdSearch } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
        // console.log(location.pathname);
    }, [location])

    return showSearch && visible ? (
        <>
            <div className='text-center'>
                <div className='inline-flex items-center justify-center border border-gray-400 px-5 mb-3 mx-3 rounded-full w-3/4 sm:w-1/2'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 w-full outline-none bg-inherit text-lg' type="text" placeholder='Search . . .' />
                    <IoMdSearch className='w-10 text-xl' />
                </div>
                <RxCrossCircled onClick={() => setShowSearch(false)} className='inline cursor-pointer text-xl mb-1' />
            </div>
        </>
    ) : null
}

export default SearchBar
