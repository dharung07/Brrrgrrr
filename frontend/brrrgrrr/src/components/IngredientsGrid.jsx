import React, { useContext, useEffect, useState } from 'react'
import Ingredients from './Ingredients';
import { GlobalContext } from '../context/context';

export default function IngredientsGrid() {

    const { ingredients, loadIngredients } = useContext(GlobalContext);

    return (
        <div className='p-5 bg-[#dcecb9] rounded-[10px] sm:w-1/2 md:w-1/2'>
            <h1 className='bg-[#dcecb9] text-xl font-semibold text-center mb-4'>Ingredients</h1>

            <div className='flex flex-col gap-3 bg-[#D5ED9F]'>
                {
                    loadIngredients ?
                        <p className='text-center bg-[#dcecb9]] text-gray-600'>Loading...</p> :
                        ingredients && ingredients.map((item, index) =>
                            <Ingredients
                                key={index}
                                id={item._id}
                                ingredient={item.name}
                                ingredientPrice={item.price}
                                ingredientImage={item.image}
                            />
                        )
                }
            </div>
        </div>
    )
}
