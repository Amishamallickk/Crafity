import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Crafstars = () => {
  return (
    <div className='text-3xl py-30 static bg-[#ffafb0] text-white flex justify-center py-2 mt-1'>
      <p>
        <Link to="/seller">
        Explore our Crafstars
        <RiArrowRightDoubleFill className='ml-[250px] mt-[-34px]'/>
        </Link>
      </p>
    </div>
  )
}

export default Crafstars
