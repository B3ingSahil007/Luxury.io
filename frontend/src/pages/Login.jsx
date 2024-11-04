import React, { useState } from 'react'

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <>
            <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
                <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                    <p className='prata-regular text-3xl'>{currentState}</p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 text-black w-full'>
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='First-Name : John' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Last-Name : Doe' />
                </div>
                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="number" placeholder='Mobile Number : 1234567890' />
                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Apartment, Suite, Unit, or Floor : Apt 4B or Floor 2' />
                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Street : 123 Main St' />
                <div className='flex flex-col sm:flex-row gap-4 text-black w-full'>
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='City : San Francisco' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='State : California' />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 text-black w-full'>
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="number" placeholder='Zip-Code : 94103' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Country : United States' />
                </div>
            </form>

        </>
    )
}

export default Login
