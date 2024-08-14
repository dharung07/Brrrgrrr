import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'

export default function Checkout() {

    const { checkoutItems, totalPrice, setTotalPrice, resetCheckOutIngredients, setResetCount, addItemToOrders, orders } = useContext(GlobalContext);

    function handleOrderButton() {
        if (totalPrice === 0) {
            alert('Please select ingredient');
        } else {
            // Add items to Ordered list
            addItemToOrders(checkoutItems, totalPrice);
            console.log(orders);

            setTotalPrice(0);
            resetCheckOutIngredients();
            setResetCount(true);
            alert('Order placed!')
        }
    }

    return (
        <div className='p-5 bg-[#dcecb9] rounded-[10px] flex flex-col justify-between sm:w-1/2 md:w-1/2'>
            <div className='bg-[#dcecb9]'>
                <h1 className='bg-[#dcecb9] text-xl font-semibold text-center mb-4'>Checkout</h1>

                <div className='mb-4 bg-[#dcecb9] flex flex-col justify-between gap-4 sm:flex-row md:flex-row'>
                    <div className='bg-[#FF9100] py-2 px-4 w-full flex justify-between opacity-90 rounded-md sm:w-2/3 md:w-2/3'>
                        <h3 className='bg-[#FF9100] text-gray-100 font-semibold'>Total amount to pay</h3>
                        <h3 className='bg-[#FF9100] text-black font-bold'>Rs. {totalPrice}</h3>
                    </div>
                    <div
                        className='cursor-pointer flex justify-center bg-[#32fe358d] border-[#32fe358d] border-b-[#00712D] border-r-[#00712D] border-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] bg-clip-padding py-2 px-4 w-full rounded-md hover:bg-[#00712D] hover:text-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:backdrop-blur-[0.2px] hover:border-[#00712D] sm:w-1/3 md:1/3'
                        onClick={handleOrderButton}
                    >
                        <button className='font-bold'>Order Now</button>
                    </div>
                </div>

                <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white border border-gray-300'>
                        <thead>
                            <tr>
                                <th className='py-2 px-4 border-b border-[#00712D] text-left bg-[#D5ED9F]'>Ingredient</th>
                                <th className='py-2 px-4 border-b border-[#00712D] text-left bg-[#D5ED9F]'>Quantity</th>
                                <th className='py-2 px-4 border-b border-[#00712D] text-left bg-[#D5ED9F]'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !checkoutItems.some(item => item.quantity > 0) ? (
                                    <tr className='border-b hover:bg-gray-50'>
                                        <td className='py-2 px-4'>-</td>
                                        <td className='py-2 px-4'>-</td>
                                        <td className='py-2 px-4'>-</td>
                                    </tr>
                                ) : (
                                    checkoutItems.map((item, index) =>
                                        item.quantity > 0 ? (
                                            <tr key={index} className='border-b hover:bg-gray-50'>
                                                <td className='py-2 px-4'>{item.name}</td>
                                                <td className='py-2 px-4'>{item.quantity} nos</td>
                                                <td className='py-2 px-4'>Rs.{item.price * item.quantity}</td>
                                            </tr>
                                        ) : null
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
