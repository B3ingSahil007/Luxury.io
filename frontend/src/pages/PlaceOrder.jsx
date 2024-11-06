import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { FaAmazonPay, FaApplePay, FaGooglePay, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaRegArrowAltCircleRight, FaRupeeSign } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const [method, setMethod] = useState("cod");
    const [showOnlinePayments, setShowOnlinePayments] = useState(false);
    const [showCardPayments, setShowCardPayments] = useState(false);
    const navigate = useNavigate()

    const toggleOnlineCategory = () => {
        setShowOnlinePayments(prev => !prev);
    };

    const toggleCardCategory = () => {
        setShowCardPayments(prev => !prev);
    };

    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between gap-4 min-h-[80vh]'>
                {/* Left Side */}
                <div className='flex flex-col gap-4 w-full mt-3 sm:max-w-[480px]'>
                    <div className='text-xl sm:text-2xl'>
                        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                    </div>
                    <div className='flex gap-3 text-black'>
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='First-Name : John' />
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Last-Name : Doe' />
                    </div>
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="email" placeholder='E-Mail Address : john.doe@example.com' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="number" placeholder='Mobile Number : 1234567890' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Apartment, Suite, Unit, or Floor : Apt 4B or Floor 2' />
                    <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" placeholder='Street : 123 Main St' />
                    <div className='flex gap-3 text-black'>
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='City : San Francisco' />
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='State : California' />
                    </div>
                    <div className='flex gap-3 text-black'>
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="number" placeholder='Zip-Code : 94103' />
                        <input className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" placeholder='Country : United States' />
                    </div>
                </div>
                {/* Right Side */}
                <div className='mt-3'>
                    <div className='mt-3 sm:min-w-72'>
                        <CartTotal />
                    </div>
                    <div className='mt-8'>
                        <Title text1={"PAYMENT"} text2={"METHOD"} />
                        {/* Payment Method Selection */}
                        <div className='-mt-4'>
                            <div onClick={() => setMethod('cod')} className='flex mb-3 mt-2 items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                                <p className='text-gray-400 text-base'>Cash On Delivery ( COD )</p>
                            </div>
                            <p onClick={toggleOnlineCategory} className='my-1 text-lg flex items-center cursor-pointer gap-2'>
                                ONLINE PAYMENTS<FaRegArrowAltCircleRight className={`h-5 sm:hidden ${showOnlinePayments ? 'rotate-90' : ''}`} />
                            </p>
                            <div className={`mt-2 mb-3 ${showOnlinePayments ? '' : 'hidden'} sm:block`}>
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <div onClick={() => setMethod('applePay')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'applePay' ? 'bg-green-500' : ''}`}></p>
                                        <FaApplePay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('googlePay')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'googlePay' ? 'bg-green-500' : ''}`}></p>
                                        <FaGooglePay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('amazonPay')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'amazonPay' ? 'bg-green-500' : ''}`}></p>
                                        <FaAmazonPay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('payTm')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'payTm' ? 'bg-green-500' : ''}`}></p>
                                        <SiPaytm className='text-2xl' />
                                    </div>
                                </div>
                            </div>

                            <p onClick={toggleCardCategory} className='my-1 text-lg flex items-center cursor-pointer gap-2'>
                                CARD PAYMENTS<FaRegArrowAltCircleRight className={`h-5 sm:hidden ${showCardPayments ? 'rotate-90' : ''}`} />
                            </p>
                            <div className={`mt-2 mb-2 ${showCardPayments ? '' : 'hidden'} sm:block`}>
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <div onClick={() => setMethod('payPal')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'payPal' ? 'bg-green-500' : ''}`}></p>
                                        <FaCcPaypal className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('masterCard')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'masterCard' ? 'bg-green-500' : ''}`}></p>
                                        <FaCcMastercard className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('visaCard')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visaCard' ? 'bg-green-500' : ''}`}></p>
                                        <RiVisaLine className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('discoverCard')} className='flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer'>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'discoverCard' ? 'bg-green-500' : ''}`}></p>
                                        <FaCcDiscover className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className='w-full text-start'>
                                    {/* <button onClick={() => { navigate('/cart') }} className='btn bg-black border-gray-500 border-1 text-white px-10 text-sm'>BACK</button> */}
                                    <button onClick={() => { navigate('/cart') }} className='btn bg-black border-gray-500 border-1 text-white text-sm py-2 sm:self-auto self-center'>GO BACK</button>
                                </div>
                                <div className='w-full text-end'>
                                    {/* <button onClick={() => { navigate('/orders') }} className='btn bg-black border-gray-500 border-1 text-white px-10 text-sm'>PLACE ORDER</button> */}
                                    <button onClick={() => { navigate('/orders') }} className='btn bg-black border-gray-500 border-1 text-white text-sm py-2 sm:self-auto self-center'>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceOrder;
