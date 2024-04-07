import React, { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import styles from "../../Styles/styles";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Scrunchie",
      description: "Scrunchies to styles up our hair and everyday outift",
      price: 399,
    },
    {
      name: "Scrunchie",
      description: "Scrunchies to styles up our hair and everyday outift",
      price: 299,
    },
    {
      name: "Scrunchie",
      description: "Scrunchies to styles up our hair and everyday outift",
      price: 99,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#73585830] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[30%] bg-amber-50 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          
          {/* Item Length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart single items */}
          <br />
          <div className="w-full  border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="pc-5 mb-3">
            {/* checkout button */}
            <Link to="/checkout">
                <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[2px]`}>
                    <h1 className="text-[#fff] text-[18px] font-[600]">
                        Checkout Now (₹1080) </h1>

                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-fill flex item-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[24px] h-[24px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={15} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={15} color="7d879c" />
          </div>
        </div>
        <img src ="./Nav Bar pics/accessories1.jpg" alt="" className="w-[80px] h-[80px] ml-2" />
        <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[400] text-[15px] text-[#00000082]">${data.price} * {value}</h4>
            <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
                ₹{totalPrice}
            </h4>
        </div>
        <RxCross1 className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Cart;
