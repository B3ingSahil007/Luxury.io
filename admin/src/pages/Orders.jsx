import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendURL, currency } from '../App';
import { toast } from 'react-toastify';
import { BsBoxSeam } from 'react-icons/bs';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(backendURL + '/api/order/list', {}, { headers: { token } });
      if (response.data.orders) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId((prevOrderId) => (prevOrderId === orderId ? null : orderId));
  };

  const statusHandle = async (event, orderId) => {
    try {
      const response = await axios.post(backendURL + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      } else {
        toast.error(response.data.message || 'Something went wrong');
        console.log(response.data.message);
      }

    } catch (error) {
      console.error('Error loading status:', error);
      toast.error(response.data.message || 'Something went wrong');
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h4 className="text-xl font-semibold text-gray-600 mb-2">
        Order Page :
      </h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              className='flex-[1_1_calc(50%-20px)] border border-gray-300 p-4 rounded-md box-border relative cursor-pointer bg-gradient-to-r from-gray-900 to-gray-600 text-gray-500'
              key={index}
              onClick={() => toggleOrderDetails(order._id)} // Toggle order details on click
            >
              <BsBoxSeam className="absolute top-2.5 right-2.5 text-2xl text-green-400" />

              {/* Only display Order ID initially */}
              <h6>
                <strong className='text-gray-400'>Order ID :</strong> {order._id}
              </h6>

              {expandedOrderId === order._id && ( // Show expanded order details only if the order is clicked
                <div className="mt-2">
                  <p><strong className='text-gray-400'>Status :</strong> {order.status}</p>
                  <p><strong className='text-gray-400'>Price :</strong>
                    {order.items.map((item, idx) => (
                      <span key={idx}> {currency}{item.price} {idx === order.items.length - 1 ? '' : ', '} </span>
                    ))}
                  </p>
                  <p><strong className='text-gray-400'>Amount :</strong> {currency} {order.amount}</p>
                  <p><strong className='text-gray-400'>Payment :</strong> {order.payment ? 'Done' : 'Pending'}</p>
                  <p><strong className='text-gray-400'>Payment Method :</strong> {order.paymentMethod}</p>
                  <p><strong className='text-gray-400'>Date :</strong> {new Date(order.date).toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>

                  <div className="mt-3">
                    {/* Order status dropdown */}
                    <select onChange={(event) => statusHandle(event, order._id)} value={order.status} className='p-1 font-semibold bg-transparent border-transparent border rounded-md' onClick={(event) => event.stopPropagation()}>
                      <option className='bg-gray-500 text-black' value="Order Placed">Order Placed</option>
                      <option className='bg-gray-500 text-black' value="Packing">Packing</option>
                      <option className='bg-gray-500 text-black' value="Shipped">Shipped</option>
                      <option className='bg-gray-500 text-black' value="Out Of Delivery">Out Of Delivery</option>
                      <option className='bg-gray-500 text-black' value="Delivered">Delivered</option>
                      <option className='bg-gray-500 text-black' value="Canceled">Canceled</option>
                      <option className='bg-gray-500 text-black' value="Returned">Returned</option>
                      <option className='bg-gray-500 text-black' value="Refunded">Refunded</option>
                      <option className='bg-gray-500 text-black' value="Awaiting Payment">Awaiting Payment</option>
                    </select>
                    <div className="mt-3">
                      {/* Display product items */}
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          <p><strong className='text-gray-400'>Product Item : </strong> {item.name}</p>
                          <p><strong className='text-gray-400'>Quantity : </strong> {item.quantity}</p>
                          <p><strong className='text-gray-400'>Size : </strong> {item.size}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3">
                    <h6><strong className='text-gray-400'>Shipping Address :</strong></h6>
                    <p><strong className='text-gray-400'>Name :</strong> {order.address.firstname} {order.address.lastname}</p>
                    <p><strong className='text-gray-400'>City :</strong> {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipCode}</p>
                    <p><strong className='text-gray-400'>Street :</strong> {order.address.street}</p>
                    <p><strong className='text-gray-400'>Apartment :</strong>{' '} {order.address.apartment || 'N/A'}</p>
                    <p><strong className='text-gray-400'>Mobile :</strong> {order.address.mobileNumber}</p>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
