import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Orders = () => {
    const { currency, backendUrl, token } = useContext(ShopContext)
    const [orderData, setOrderData] = useState([])

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null
            }
            const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
            // console.log(response.data.orders);
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['amount'] = order.amount
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                // console.log(allOrdersItem.reverse());
                setOrderData(allOrdersItem.reverse())
            }

        } catch (error) {
            console.error('Error loading orders:', error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [token])

    return (
        <>
            <div className='pt-4'>
                <div className='text-xl lg:text-2xl'>
                    <Title text1={"MY"} text2={"ORDERS"} />
                </div>
                <div>
                    {orderData.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">
                            <p className="text-lg font-medium">You have no orders yet !</p>
                            <p className="mt-1">Explore our collection and place your first order.</p>
                            <Link to={'/collection'} className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 transition-all ease-linear'>
                                <button className='mt-3'>
                                    Explore Our Collection
                                </button>
                            </Link>
                        </div>
                    ) : (
                        orderData.map((item, index) => (
                            <div
                                key={index}
                                className="py-3 text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                            >
                                <div className="flex items-start gap-6 text-sm">
                                    <img
                                        className="w-16 sm:w-20"
                                        src={item.image[0]}
                                        alt="Product_Image"
                                    />
                                    <div>
                                        <p className="sm:text-base font-medium">{item.name}</p>
                                        <div className="flex items-center gap-3 mt-1 text-base text-gray-400">
                                            <p>
                                                {currency}
                                                {item.amount}
                                            </p>
                                            <p>Quantity : {item.quantity}</p>
                                            <p>Size : {item.size}</p>
                                        </div>
                                        <p className="mt-1">
                                            Date : <span className="text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </p>
                                        <p className="mt-1">
                                            Payment : <span className="text-gray-500">{item.paymentMethod}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                        <p className="text-sm md:text-base">{item.status}</p>
                                    </div>
                                    <button onClick={loadOrderData} className="btn bg-black border-gray-500 border-1 text-white px-10 text-sm">
                                        TRACK ORDER
                                    </button>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default Orders
