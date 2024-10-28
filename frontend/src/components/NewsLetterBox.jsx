import React, { useState } from 'react'
import Title from './Title'

const NewsLetterBox = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="text-center py-8">
                <div className='text-3xl'>
                    <Title text1={'NEWS'} text2={'LETTER'} />
                </div>
                <p className='text-2xl font-medium text-gray-400'>Subscibe Now & Get 20% Off</p>
                <p className='text-gray-400 mt-2'>Don’t miss out on special promotions and sneak peeks at upcoming collections!</p>
                <form onSubmit={handleOnSubmit} style={{ borderRadius: '10px' }} className='w-full sm:w-2/3 flex items-center gap-3 mx-auto my-3 border pl-3'>
                    <input className='w-full sm:flex-1 outline-none bg-transparent' type="email" name="email" id="email" placeholder='Enter Your E-Mail Addess To Subscribe . . .' required />
                    <button className="btn btn-outline-light text-sm px-6 py-2 m-2">Subscribe</button>
                </form>
            </div >
        </>
    )
}

export default NewsLetterBox
