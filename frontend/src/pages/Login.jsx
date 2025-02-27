import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState('Log In');
    const { token, setToken, backendUrl } = useContext(ShopContext)
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmpassword] = useState('')
    const [apartment, setApartment] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [zipCode, setZipCode] = useState('')

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(backendUrl + '/api/user/register', { firstname, lastname, email, mobileNumber, password, confirmPassword, apartment, street, city, state, country, zipCode })
                // console.log(response.data);
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
                toast.success(response.data.message);
                setCurrentState('Log In');

            } else {
                const response = await axios.post(backendUrl + '/api/user/login', { email, password })
                // console.log(response.data);
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }
                toast.success(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'An Error Occurred. Please Try Again !');
        }
    }

    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token])

    return (
        <form onSubmit={onHandleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-5xl m-auto mt-14 gap-4 text-black'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl text-gray-500'>{currentState}</p>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>

            {currentState === 'Log In' ? (
                <>
                    {/* Login Form */}
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black' type="email" placeholder='Email : johndoe@example.com' required />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full sm:w-3/4 md:w-2/3 px-3 text-black' type="password" placeholder='Password : ********' required />
                    <div className='w-full sm:w-3/4 md:w-2/3 flex justify-between text-sm mt-[-8px] text-gray-500'>
                        <p className='cursor-pointer'>Forgot Password?</p>
                        <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Your Account</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Sign Up Form */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                        {/* Left Column: Personal Information */}
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input onChange={(e) => setFirstname(e.target.value)} value={firstname} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='First-Name : John' required />
                                <input onChange={(e) => setLastname(e.target.value)} value={lastname} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Last-Name : Doe' required />
                            </div>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="email" placeholder='Email : johndoe@example.com' required />
                            <input onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="number" placeholder='Mobile Number : 1234567890' required />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="password" placeholder='Password : ********' required />
                            <input onChange={(e) => setConfirmpassword(e.target.value)} value={confirmPassword} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="password" placeholder='Confirm Password : ********' required />
                        </div>
                        {/* Right Column: Address Information */}
                        <div className='flex flex-col gap-4'>
                            <input onChange={(e) => setApartment(e.target.value)} value={apartment} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Apartment, Suite, Unit, or Floor : Apt 4B or Floor 2' />
                            <input onChange={(e) => setStreet(e.target.value)} value={street} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Street : 123 Main St' />
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input onChange={(e) => setCity(e.target.value)} value={city} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='City : San Francisco' />
                                <input onChange={(e) => setState(e.target.value)} value={state} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='State : California' />
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <input onChange={(e) => setCountry(e.target.value)} value={country} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="number" placeholder='Zip-Code : 94103' />
                                <input onChange={(e) => setZipCode(e.target.value)} value={zipCode} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Country : United States' />
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
