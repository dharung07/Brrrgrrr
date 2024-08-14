import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Banner() {

  const navigate = useNavigate();

  function handleIngredients() {
    navigate('/ingredients');
}

  return (
    <div className='p-4 bg-[#dcecb9] rounded-[10px] flex justify-between items-center'>
      <div className='bg-[#dcecb9]'>
        <p className='text-xs text-[#00712D] font-semibold bg-[#dcecb9] sm:text-base md:text-base'>
          <span className='text-2xl text-black font-bold bg-[#dcecb9] sm:text-3xl md:text-3xl'>Discover More </span>
          <br className='sm:hidden md:hidden' /> Visit the Ingredient Detail Page for In-Depth Information
        </p>
      </div>
      <div className='h-10 px-4 bg-[#32fe358d] border-[#32fe358d] border-b-[#00712D] border-r-[#00712D] border-2 flex justify-center items-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] bg-clip-padding rounded-md hover:bg-[#00712D] hover:text-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:backdrop-blur-[0.2px] hover:border-[#00712D] sm:px-6 md:px-6'>
        <button className='font-medium text-base' onClick={handleIngredients}>visit</button>
      </div>
    </div>
  )
}
