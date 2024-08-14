import React, { useContext } from 'react'
import AppBar from './AppBar'
import { GlobalContext } from '../context/context'

export default function ShowIngredients() {

    const { ingredients } = useContext(GlobalContext);

    console.log(ingredients);

    return (
        <div>
            <AppBar />
            <div className="p-5">
                {/* <h1 className="text-2xl font-bold mb-4">Ingredients</h1> */}
                {ingredients.length === 0 ? (
                    <p>No ingredients yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="bg-[#dff0b8] px-4 py-2 flex gap-4 rounded-lg shadow-md">
                                <div className="flex items-center bg-[#dff0b8]">
                                    <img src={ingredient.image} alt="image" className="h-20 w-auto rounded-[10px] sm:h-40" />
                                </div>
                                <div className='bg-[#dff0b8] flex flex-col justify-center'>
                                    <h2 className="text-sm text-[#00712D] font-bold mb-2 bg-[#dff0b8] sm:text-xl">Ingredient #{index + 1}</h2>
                                    <p className="mb-2 text-sm bg-[#dff0b8] md:text-base"><span className="font-semibold bg-[#dff0b8]">Ingredient Name:</span> {ingredient.name}</p>
                                    <p className="mb-2 text-sm bg-[#dff0b8] md:text-base"><span className="font-semibold bg-[#dff0b8]">Ingredient Price:</span> Rs.{ingredient.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    )
}
