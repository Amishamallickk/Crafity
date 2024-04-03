import React, { useState } from 'react';
import { AiFillStar, AiOutlineEye, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProductDetailsCard from "../../../Components/Route/ProductDetailsCard/ProductDetailsCard";
import styles from '../../../Styles/styles';

const ProductCard = ({data}) => {
const[open,setOpen]=useState(false);

const d= data.name;
const product_name=d.replace(/\s+/g,"-");
return (
    <>
    <div className='w-[200px] h-[320px] bg-rose-50 rounder-lg shadow-sm p-2   relative cursor-pointer'>
        <div className='flex justify-center'></div>
        <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} alt="" className='q-full h-[140px] mt-2 ml-5 object-contain' />
        </Link>
        <Link to="/">
            <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
            <h4  className='pb-3 font-[600] text-rose-900'>{data.name.length > 40 ? data.name.slice(0.40) + "..." : data.name}
            </h4>

            <div className='flex'>
                <AiFillStar className='mr-1 mt-[-8px] cursor-pointer' color="#F6BA00" />
                <AiFillStar className='mr-1 mt-[-8px] cursor-pointer' color="#F6BA00" />
                <AiFillStar className='mr-1 mt-[-8px] cursor-pointer' color="#F6BA00" />
                <AiFillStar className='mr-1 mt-[-8px] cursor-pointer' color="#F6BA00" />
                <AiOutlineStar className='mr-1 mt-[-8px] cursor-pointer' color="#F6BA00" />
            </div>
            <div className='py-1 flex items-center justify-between '>
                <div className='flex'>
                    <h5 className={`${styles.productDiscountPrice} text-rose-900 font-[800]`}>
                        ₹
                        {data.price === 0
                        ? data.price : data.discount_price}
                    </h5>
                    <h4 className={`${styles.price}`}>
                        ₹
                        { data.price ? data.price : null}
                    </h4> 
                </div>
                <span className='font-[400] text-[15px] text-rose-600 mr-3 mt-[-7px]'>
                    {data.total_sell} sold
                    {/* total product sold */}
                </span>
            </div>
            </Link>
            {/* side options */}
            <div>
                <AiOutlineEye 
                size={22}
                className='cursor-pointer absolute right-1 top-5 text-rose-600'
                onClick={() => setOpen(!open)}
                title='Quick View'/>
                <AiOutlineShoppingCart 
                size={22}
                className='cursor-pointer absolute right-1 top-14 text-rose-600'
                onClick={() => setOpen(!open)}
                title='Add to Cart'/>
                {
                    open ? (
                        <ProductDetailsCard setOpen={setOpen} data={data} />
                    ) : null
                }
            </div>
        
    </div>
    </>
  )
}

export default ProductCard
