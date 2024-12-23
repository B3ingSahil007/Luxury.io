import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendURL, currency } from '../App';
import { toast } from 'react-toastify';
import { BsBoxSeam } from 'react-icons/bs';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        `${backendURL}/api/order/list`,
        {},
        { headers: { token } }
      );
      console.log(response.data);
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

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/order/status`,
        { orderId, status },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchAllOrders(); // Refresh the orders list
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating status');
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h4>Order Page</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 calc(50% - 20px)', // Takes 50% width with space between
                border: '1px solid #ccc',
                padding: '15px',
                borderRadius: '5px',
                boxSizing: 'border-box',
                position: 'relative',
              }}
            >
              <BsBoxSeam
                className=""
                style={{
                  position: 'absolute',
                  top: '10px', // Aligns vertically at the top with padding
                  right: '10px', // Aligns horizontally to the right with padding
                  fontSize: '24px', // Adjust size as needed
                  color: 'green'
                }}
              />
              <h6>
                <strong>Order ID :</strong> {order._id}
              </h6>
              <p>
                <strong>Status :</strong> {order.status}
              </p>
              <p>
                <strong>Price :</strong>{' '}
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    ₹{item.price}
                    {idx === order.items.length - 1 ? '' : ', '}
                  </span>
                ))}
              </p>
              <p>
                <strong>Amount :</strong> {currency}
                {order.amount}
              </p>
              <p>
                <strong>Payment :</strong> {order.payment ? 'Done' : 'Pending'}
              </p>
              <p>
                <strong>Payment Method :</strong> {order.paymentMethod}
              </p>
              <p>
                <strong>Date :</strong> {new Date(order.date).toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', })}
              </p>
              <select value={order.status} onChange={(e) => updateOrderStatus(order._id, e.target.value)}>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out Of Delivery">Out Of Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Canceled">Canceled</option>
                <option value="Returned">Returned</option>
                <option value="Refunded">Refunded</option>
                <option value="Awaiting Payment">Awaiting Payment</option>
              </select>
              <div className="mt-3">
                <h6>
                  <strong></strong>
                </h6>
                {order.items.map((item, idx) => (
                  <div key={idx}>
                    <p>
                      <strong>Product Item : </strong>
                      {item.name}
                    </p>
                    <p>
                      <strong>Quantity : </strong>
                      {item.quantity}
                    </p>
                    <p>
                      <strong>Size : </strong>
                      {item.size}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <h6><strong>Shipping Address :</strong></h6>
                <p>
                  <strong>Name :</strong> {order.address.firstname}{' '}
                  {order.address.lastname}
                </p>
                <p>
                  <strong>City :</strong> {order.address.city},{' '}
                  {order.address.state}, {order.address.country} -{' '}
                  {order.address.zipCode}
                </p>
                <p>
                  <strong>Street :</strong> {order.address.street}
                </p>
                <p>
                  <strong>Apartment :</strong>{' '}
                  {order.address.apartment || 'N/A'}
                </p>
                <p>
                  <strong>Mobile :</strong> {order.address.mobileNumber}
                </p>
              </div>
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
