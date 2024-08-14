import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/context';

export default function Ingredients({ id, ingredient, ingredientPrice }) {

    const [count, setCount] = useState(0);
    const { handleQuantity, setResetCount, resetCount } = useContext(GlobalContext);

    function handleIncrement() {
        handleQuantity(id,true);
        setCount(count + 1);
    }

    function handleDecrement() {
        if (count > 0) {
            handleQuantity(id, false);
            setCount(count - 1);
        }
    }

    useEffect(() => {
        setCount(0);
        setResetCount(false);
    }, [resetCount])

    return (
        <div className='px-2 py-3 border-b-2 border-r-2 border-[#00712D] rounded-[5px] flex justify-between'>
            <div className='flex gap-2 items-center'>
                <p className='text-black font-bold bg-[#D5ED9F] px-3 py-1 mr-1 rounded-[3px]'>Rs. {ingredientPrice}</p>
                <p className='font-semibold '>{ingredient}</p>
            </div>
            <div className='flex gap-2 bg-[#D5ED9F] px-3 py-1 rounded-[3px]'>
                <button className='bg-[#D5ED9F] font-bold' onClick={handleDecrement}>-</button>
                <p className='bg-[#D5ED9F]'>{count}</p>
                <button className='bg-[#D5ED9F] font-bold' onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}
