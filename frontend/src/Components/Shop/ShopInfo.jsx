import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../Styles/styles';
import { backend_url } from '../../server';

const ShopInfo = ({isOwner}) => {
    const { seller } = useSelector((state) =>  state.seller);

    const logoutHandler = async () => {
        // axios.get(`${server}/shop/logout`,{
        //   withCredentials: true,
        // });
        // window.location.reload();
      };

  return (
    <div>
    <div className="w-full py-5">
      <div className="w-full flex item-center justify-center">
      <img
            src={`${backend_url}${seller?.avatar}`}
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-full"
          />
      </div>
      <h3 className="text-center py-2 text-[20px] font-Roboto"> Lorem.
        {/* {seller.name} */}
    </h3> 
      <p className="text-[16px] text-[#000000a6] px-[10px] flex items-center font-Roboto">
        {/* {seller.description} */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolorum vel. Libero fuga architecto ducimus non 
        </p>
    </div>
    <div className="pl-3 pb-3">
        <h5 className="font-[600]">Address</h5>
        <h4 className="text-[#000000a6]">dfvgbhn
            {/* {seller.address} */}
        </h4>
      </div>
      <div className="pl-3 pb-3">
        <h5 className="font-[600]">Phone Number</h5>
        <h4 className="text-[#000000a6]">123456
            {/* {seller.phoneNumber} */}
            </h4>
      </div>
       <div className="pl-3 pb-3">
        <h5 className="font-[600]">Total Products</h5>
        <h4 className="text-[#000000a6]">10
        {/* {products && products.length} */}
        </h4>
      </div>
      <div className="pl-3 pb-3">
        <h5 className="font-[600]">Shop Ratings</h5>
        <h4 className="text-[#000000b0]">4/5
            {/* {averageRating}/5 */}
        </h4>
      </div>
      <div className="pl-3 pb-3">
        <h5 className="font-[600]">Joined On</h5>
        <h4 className="text-[#000000b0]">10/10/23
            {/* {seller.createdAt.slice(0, 10)} */}
        </h4>
      </div> 

      {isOwner && (
        <div className="pb-3 px-4">
           <Link to="/settings">
           <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] bg-rose-500`}>
            <span className="text-white font-medium">Edit Shop</span>
          </div>
           </Link>
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px] bg-rose-500`}
          onClick={logoutHandler}
          >
            <span className="text-white font-medium">Log Out</span>
          </div>
        </div>
      )}
  </div>
  )
}

export default ShopInfo
