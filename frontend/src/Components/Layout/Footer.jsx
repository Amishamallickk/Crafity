import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsBalloonHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  footerProductLinks,
  footerShopLinks,
  footerforyouLinks,
} from "../../Static/data";

const Footer = () => {
  return (
    <div className="bg-rose-800 text-rose-50 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10 sm:text-center mt-2">
        <ul className="px-5 text-center sm:text-start flex sm:block flex:col items-center">
          <img
            src={require("../../Assests/logo1.png")}
            alt=""
            className="w-40 ml-4"
          />
          <br />
          <p className="font-Poppins text-[14px] mt-[-15px]">
            An E-commerce art platform that showcases one-of-a-kind handcrafted,
            custom and unique artworks from all over India directly from
            artists.
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook
              size={25}
              style={{
                marginLeft: "40px",
                cursor: "pointer",
                color: "#faffe1"
              }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer", color: "#faffe1"}}
            />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer", color: "#faffe1"}}
            />
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-bold text-[20px] underline text-rose-50">
            About Us
          </h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-white hover:text-amber-200 duration-300 text-sm cursor-pointer leading-6 font-semibold"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-bold text-[20px] underline text-rose-50">
            Category
          </h1>
          {footerShopLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-white hover:text-amber-200 duration-300 text-sm cursor-pointer leading-6 font-semibold"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-bold text-[20px] underline text-rose-50">
            For You
          </h1>
          {footerforyouLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-white hover:text-amber-200 duration-300 text-sm cursor-pointer leading-6 font-semibold"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-white text-sm pb-3 pl-10 ">
        <span>@{new Date().getFullYear()} Crafity. All rights reserved.</span>
        <span>
          Happy Shopping
          <BsBalloonHeartFill className="mt-[-18px] ml-[240px]" size={18}/>
        </span>
        <div className="">
        <img
          src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
          alt=""
          className=" pl-10 "
        />
        </div>
      </div>
    </div>
  );
};

export default Footer;
