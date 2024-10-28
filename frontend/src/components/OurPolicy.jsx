import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Title from './Title';

const OurPolicy = () => {
    return (
        <>
            <div className="my-2">
                <div className="text-center text-3xl py-8">
                    <Title text1={'OUR'} text2={'POLICY'} />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Our policy is designed to prioritize your satisfaction and peace of mind. We offer hassle-free exchanges, a 7-day return option, and 24/7 customer support to assist with any inquiries. Shop confidently, knowing our flexible policies are here to ensure a smooth and enjoyable experience.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base">
                    <div style={{ borderRadius: '20px' }} className='border p-10 hover:scale-110 transition-transform ease-linear'>
                        <RiExchangeFundsFill className='text-4xl m-auto mb-3 text-light' />
                        <p className='font-semibold mb-2'>Easy Exchange Policy</p>
                        <p className='text-gray-400'>We Offer Hassle Free Exchange Policy</p>
                    </div>
                    <div style={{ borderRadius: '20px' }} className='border p-10 hover:scale-110 transition-transform ease-linear'>
                        <IoCheckmarkDoneCircleOutline className='text-4xl m-auto mb-3 text-light' />
                        <p className='font-semibold mb-2'>7 Days Return Policy</p>
                        <p className='text-gray-400'>We Provide 7 Days Free Return Policy</p>
                    </div>
                    <div style={{ borderRadius: '20px' }} className='border p-10 hover:scale-110 transition-transform ease-linear'>
                        <TfiHeadphoneAlt className='text-4xl m-auto mb-3 text-light' />
                        <p className='font-semibold mb-2'>Best Customer Support</p>
                        <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPolicy
