import React from 'react';
import { Link } from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

const Crafstars = () => {
  return (
    <div className='text-3xl py-30 static bg-[#ffafb0] text-white flex justify-center py-2 mt-1'>
        <p>Open your free Shop! Calling all Artisans
            <Link to ="/shop-login" className='ml-[10px] text-white font-bold underline'>Sell With Us
            <RxDoubleArrowRight className='ml-[610px] mt-[-34px]'/></Link>
            
        </p>
    </div>
  )
}

export default Crafstars