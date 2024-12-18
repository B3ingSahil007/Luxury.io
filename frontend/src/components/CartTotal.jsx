import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount, products, cartItems } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    const subtotal = getCartAmount();
    const discount = subtotal * 0.10;
    const discountedTotal = subtotal - discount;
    const totalWithShipping = discountedTotal + delivery_fee;


    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className="flex flex-col gap-2 mt-1 text-sm">
                {cartData.length > 0 && cartData.map((item, index) => {
                    const productData = products.find((product) => product._id === item._id);
                    const totalPrice = productData.price * item.quantity;
                    return (
                        <div key={index} className="text-gray-400 mb-2">
                            <div className="grid grid-cols=[3fr_1fr_1fr] sm:grid-cols-[10fr_3fr_2fr] md:grid-cols-[6fr_3fr_1.2fr]">
                                <p>Product Name: {productData.name}</p>
                                <p><span className='mr-5'>x</span>{item.quantity}</p>
                                <p className='sm:ml-5'>{currency} {totalPrice}.00</p>
                            </div>
                        </div>
                    );
                })}
                <div className="flex justify-between">
                    <p>Sub Total : </p>
                    <p>{currency} {subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Discount ( 10% ) : </p>
                    <p>- {currency} {discount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping Fee : </p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                    <p>Total : </p>
                    <p>{currency} {totalWithShipping.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;