import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';
import AppBar from './AppBar';

export default function OrdersHistory() {

    const { orders, ingredients, checkoutItems } = useContext(GlobalContext);

    console.log(checkoutItems);

    return (
        <div>
            <AppBar />
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-4">Orders</h1>
                {orders.length === 0 ? (
                    <p>No orders yet.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-md shadow-md bg-[#dff0b8]">
                            <h2 className="text-xl text-[#00712D] font-bold mb-2 bg-[#dff0b8]">Order #{index + 1}</h2>
                            <p className="mb-2 bg-[#dff0b8] font-semibold">Total Price Rs. {order.orderPrice}</p>
                            <ul className='bg-[#dff0b8]'>
                                {order.orderItems.length === 0 ? (
                                    <li className='bg-[#dff0b8]'>No items in this order.</li>
                                ) : (
                                    order.orderItems.map((item, i) => (
                                        <li key={i} className="mb-1 bg-[#dff0b8]">
                                            {item.name} - {item.quantity} x Rs. {item.price} = Rs. {item.quantity * item.price}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
