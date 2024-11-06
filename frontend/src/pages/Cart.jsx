import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { FiTrash2 } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom';
import { BsCartX } from "react-icons/bs";
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity } = useContext(ShopContext)
    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const tempData = []
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        // console.log(tempData);
        setCartData(tempData)
    }, [cartItems])
    return (
        <>
            <div className='pt-3'>
                <div className='text-2xl mb-1'>
                    <Title text1={'MY'} text2={'CART'} />
                </div>
                <div>
                    {cartData.length > 0 ? (cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id)
                        return (
                            <div key={index} className='py-3 text-gray-500 grid grid-cols=[3fr_1fr_1fr] sm:grid-cols-[3fr_2fr_1fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="Products_Image" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>Name : {productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>Cost : {currency}{productData.price}</p>
                                            <p className='px-2 sm:px-3 sm:py-1 borde bg-gray-600 text-black'>Size : {item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    <p>Quantity : <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-16 sm:max-w-20 px-2 sm:px-2 py-1 bg-gray-600 text-black' type="number" min={1} defaultValue={item.quantity} /></p>
                                    <FiTrash2 onClick={() => { updateQuantity(item._id, item.size, 0) }} className='w-4 mr-10 mx-12 sm:w-4 cursor-pointer text-red-500' />
                                </div>
                            </div>
                        )
                    })) : (
                        <>
                            <div className='text-center text-gray-500 mt-5 hover:text-red-400 transition-all ease-linear'>
                                <BsCartX className="mx-auto text-6xl" />
                                <p>"Looks like you haven't added anything to your cart yet. Explore our collection and find something you love!"</p>
                                <button className='mt-4'>
                                    <NavLink to={'/collection'} className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 transition-all ease-linear'>
                                        Continue Shopping
                                    </NavLink>
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <div className='flex justify-end my-20'>
                    <div style={{ width: '20cm' }} className='sm:w-[450px] border p-3'>
                        <CartTotal />
                        <div className='w-full text-center flex flex-col items-end'>
                            {/* <button onClick={() => navigate("/placeorder")} className='mt-3 btn bg-black border-gray-500 border-1 text-white px-10 text-sm'>PROCEED TO CHECKOUT</button> */}
                            <button onClick={() => navigate("/placeorder")} className='btn bg-black border-gray-500 border-1 text-white px-8 text-sm mr-2 py-2 mt-3 sm:self-auto self-center'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
