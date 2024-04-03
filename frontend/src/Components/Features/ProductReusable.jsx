import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../Styles/styles";

const CustomizedSection = () => {
  return (
    <div className="w-full block bg-rose-50 rounded-lg lg:flex p-2">
      <div className="w-full lg-w[50%] m-auto">
        <img
          src="./Nav Bar pics/reusable.png"
          alt="images"
          className="w-[490px] rounded-sm float-left"
        />

        <div className="w-full lg-[w-50%]">
          <h1 className="mr-[40px] mt-[110px] text-[48px] font-bold text-rose-400 font-Poppins text-center">
            Transforming Memories
          </h1>
          <p className="text-[30px] text-rose-600 text-center">
            "Give new life to your cherished items<br /> with our redesign magic !"
          </p>
          <div
            className={`${styles.button} bg-rose-600 mt-3 h-[35px] ml-[64%] `}
          >
            <Link to="reusable">
              <span className="text-rose-50 flex items-center font-medium">
                <AiOutlineArrowLeft className="mr-1 mt-1" />Get Started 
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSection;
