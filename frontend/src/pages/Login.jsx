import React, { useState } from 'react';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');

    const onHandleSubmit = async () => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onHandleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-5xl m-auto mt-14 gap-4 text-black'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl text-gray-500'>{currentState}</p>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>

            {currentState === 'Log In' ? (
                <>
                    {/* Login Form */}
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black' type="email" placeholder='Email : johndoe@example.com' required />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black' type="password" placeholder='Password : ********' required />
                    <div className='w-full sm:w-3/4 md:w-2/3 flex justify-between text-sm mt-[-8px] text-gray-500'>
                        <p className='cursor-pointer'>Forgot Your Password?</p>
                        <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Sign Up Form */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                        {/* Left Column: Personal Information */}
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='First-Name : John' required />
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Last-Name : Doe' required />
                            </div>
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="email" placeholder='Email : johndoe@example.com' required />
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="number" placeholder='Mobile Number : 1234567890' required />
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="password" placeholder='Password : ********' required />
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="password" placeholder='Confirm Password : ********' required />
                        </div>
                        {/* Right Column: Address Information */}
                        <div className='flex flex-col gap-4'>
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Apartment, Suite, Unit, or Floor : Apt 4B or Floor 2' required />
                            <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Street : 123 Main St' required />
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='City : San Francisco' required />
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='State : California' required />
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="number" placeholder='Zip-Code : 94103' required />
                                <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Country : United States' required />
                            </div>
                        </div>
                    </div>
                    {/* Footer Links */}
                    <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-500'>
                        <p className='cursor-pointer'>Forgot Your Password?</p>
                        <p onClick={() => setCurrentState('Log In')} className='cursor-pointer'>Log In Here</p>
                    </div>
                </>
            )}
            <button className='btn bg-black border-gray-500 border-1 text-white px-20 text-sm'>{currentState === 'Log In' ? 'Log In' : 'Sign Up'}</button>
        </form>
    );
};

export default Login;
