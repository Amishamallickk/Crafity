import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { backend_url } from "../../../server";

const DashboardHeader = () => {
  // const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[55px] bg-[#fffdf7] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src={require("../../../Assests/logo1.png")}
            className="w-30 h-12 pl-5"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard-coupons" className="800px:block hidden">
            <AiOutlineGift
              color="#FA7192"
              size={28}
              className="mx-5 cursor-pointer"
            />
          </Link>

          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#FA7192"
              size={28}
              className="mx-5 cursor-pointer"
            />
          </Link>

          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#FA7192" size={28} className="mx-5 cursor-pointer" />
          </Link>

          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#FA7192"
              size={28}
              className="mx-5 cursor-pointer"
            />
          </Link>
          {/* <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
