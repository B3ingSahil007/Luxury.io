import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { FaAmazonPay, FaApplePay, FaGooglePay, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaRegArrowAltCircleRight, FaRupeeSign } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
    const [method, setMethod] = useState("cod");
    const [showOnlinePayments, setShowOnlinePayments] = useState(false);
    const [showCardPayments, setShowCardPayments] = useState(false);
    const navigate = useNavigate()
    const { backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileNumber: '',
        apartment: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });

    const onChangehandle = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmithandle = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }
            // console.log(orderItems);
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }
            // console.log('Order Data :', orderData);
            switch (method) {
                // API Calls For COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                    // console.log("Response :", response.data);
                    if (response.data.success) {
                        setCartItems({});
                        toast.success('Order Placed Successfully');
                        navigate('/orders');
                    } else {
                        console.log(error);
                        toast.error(response.data.message || 'Failed to place order');
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.error('Error placing order:', error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    }

    const toggleOnlineCategory = () => {
        setShowOnlinePayments(prev => !prev);
    };

    const toggleCardCategory = () => {
        setShowCardPayments(prev => !prev);
    };

    return (
        <>
            <form onSubmit={onSubmithandle} className='flex flex-col sm:flex-row justify-between gap-4 min-h-[80vh]'>
                {/* Left Side */}
                <div className='flex flex-col gap-4 w-full mt-3 sm:max-w-[480px]'>
                    <div className='text-xl sm:text-2xl'>
                        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                    </div>
                    <div className='flex gap-3 text-black'>
                        <input onChange={onChangehandle} name='firstname' value={formData.firstname} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" required placeholder='First-Name : John' />
                        <input onChange={onChangehandle} name='lastname' value={formData.lastname} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" required placeholder='Last-Name : Doe' />
                    </div>
                    <input onChange={onChangehandle} name='email' value={formData.email} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="email" required placeholder='E-Mail Address : john.doe@example.com' />
                    <input onChange={onChangehandle} name='mobileNumber' value={formData.mobileNumber} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="number" required placeholder='Mobile Number : 1234567890' />
                    <input onChange={onChangehandle} name='apartment' value={formData.apartment} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" required placeholder='Apartment, Suite, Unit, or Floor : Apt 4B or Floor 2' />
                    <input onChange={onChangehandle} name='street' value={formData.street} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3 text-black' type="text" required placeholder='Street : 123 Main St' />
                    <div className='flex gap-3 text-black'>
                        <input onChange={onChangehandle} name='city' value={formData.city} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" required placeholder='City : San Francisco' />
                        <input onChange={onChangehandle} name='state' value={formData.state} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" required placeholder='State : California' />
                    </div>
                    <div className='flex gap-3 text-black'>
                        <input onChange={onChangehandle} name='zipCode' value={formData.zipCode} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="number" required placeholder='Zip-Code : 94103' />
                        <input onChange={onChangehandle} name='country' value={formData.country} className='border border-gray-500 bg-gray-600 rounded py-1.5 w-full px-3' type="text" required placeholder='Country : United States' />
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
                            <div onClick={() => setMethod('cod')} className={`flex mb-3 mt-2 items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-gray-800' : ''}`}>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                                <p className='text-gray-400 text-base'>Cash On Delivery ( COD )</p>
                            </div>
                            <p onClick={toggleOnlineCategory} className='my-1 text-lg flex items-center cursor-pointer gap-2'>
                                ONLINE PAYMENTS<FaRegArrowAltCircleRight className={`h-5 sm:hidden ${showOnlinePayments ? 'rotate-90' : ''}`} />
                            </p>
                            <div className={`mt-2 mb-3 ${showOnlinePayments ? '' : 'hidden'} sm:block`}>
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <div onClick={() => setMethod('applePay')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'applePay' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'applePay' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Apple Pay</span><FaApplePay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('googlePay')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'googlePay' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'googlePay' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Google Pay</span><FaGooglePay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('amazonPay')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'amazonPay' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'amazonPay' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Amazon Pay</span><FaAmazonPay className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('payTm')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'payTm' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'payTm' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Paytm</span><SiPaytm className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                            <p onClick={toggleCardCategory} className='my-1 text-lg flex items-center cursor-pointer gap-2'>
                                CARD PAYMENTS<FaRegArrowAltCircleRight className={`h-5 sm:hidden ${showCardPayments ? 'rotate-90' : ''}`} />
                            </p>
                            <div className={`mt-2 mb-2 ${showCardPayments ? '' : 'hidden'} sm:block`}>
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <div onClick={() => setMethod('payPal')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'payPal' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'payPal' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">PayPal</span><FaCcPaypal className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('masterCard')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'masterCard' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'masterCard' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Master Card</span><FaCcMastercard className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('visaCard')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'visaCard' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visaCard' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Visa Card</span><RiVisaLine className='text-2xl' />
                                    </div>
                                    <div onClick={() => setMethod('discoverCard')} className={`flex items-center gap-3 border rounded-3xl p-2 px-3 cursor-pointer ${method === 'discoverCard' ? 'bg-gray-800' : ''}`}>
                                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'discoverCard' ? 'bg-green-500' : ''}`}></p>
                                        <span className="sm:block lg:hidden">Discover Card</span><FaCcDiscover className='text-2xl' />
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
                                    <button type='submit' className='btn bg-black border-gray-500 border-1 text-white text-sm py-2 sm:self-auto self-center'>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default PlaceOrder;
