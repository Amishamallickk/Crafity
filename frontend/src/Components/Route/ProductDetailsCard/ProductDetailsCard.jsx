import React, { useState } from "react";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../Styles/styles";

    const ProductDetailsCard = ({ setOpen, data }) => {
    const [count, setCount] = useState(1);

    const handleMessageSubmit = () => {};

    const decrementCount = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="bg-amber-50">
        {data ? (
            <div className="fixed w-full h-screen top-0 left-0 bg-[#73585830] z-40 flex items-center justify-center">
            <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-amber-50 rounded-lg shadow-sm relative p-4">
                <RxCross1
                size={20}
                className="absolute right-3 top-3 z-50"
                onClick={() => setOpen(false)}
                />
                <div className="block w-full 800px:flex">
                <div className="w-full 800px:w-[50%]">
                    <img src={data.image_Url[0].url} alt="" />
                    <div className="flex">
                    <img
                        src={data.shop.shop_avatar.url}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full border-2 border-rose-500 mr-1 mt-2"
                    />
                    <div>
                        {" "}
                        <h3 className={`${styles.shop_name} mt-2`}>
                        {data.shop.name}
                        </h3>
                        <h5 className="pb-3 text-[15px] font-Roboto font-medium text-rose-900 mt-[-7px]">
                        ({data.shop.ratings}) Ratings
                        </h5>
                    </div>
                    </div>
                    <div
                    className={`${styles.button} bg-rose-600 mt-4 rounded-[7px] h-8 `}
                    onClick={handleMessageSubmit}
                    >
                    <span className="text-rose-50 flex items-center font-medium">
                        Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                    </div>
                    <h5 className="text-[16px] text-rose-600 mt-[-108px] ml-[210px] font-Roboto font-medium">
                    ({data.total_sell}) Sold out
                    </h5>
                </div>

                <div className="w-full 800px:w-[50%] pt pl-[5px] pr-[5px]">
                    <h1 className={`${styles.productTitle} text-[20px]`}>
                    {data.name}
                    </h1>
                    <p>{data.description}</p>

                    <div className="flex pt-3">
                    <h4 className={`${styles.productDiscountPrice}`}>
                        ₹{data.discount_price}
                    </h4>
                    <h3 className={`${styles.price}`}>
                        ₹{data.price ? data.price : null}
                    </h3>
                    </div>
                    <div className="flex items-center mt-1 pe-3">
                    <button
                        className="bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={decrementCount}
                    >
                        -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[4px]">
                        {count}
                    </span>
                    <button
                        className="bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={incrementCount}
                    >
                        +
                    </button>
                    <div
                        className={`${styles.button} bg-rose-600 mt-6 h-[35px] ml-[22%] `}
                    >
                        <span className="text-rose-50 flex items-center font-medium">
                        Add To Cart <AiOutlineShoppingCart className="ml-1" />
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ) : null}
        </div>
    );
    };

    export default ProductDetailsCard;
