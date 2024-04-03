import React from "react";
import styles from "../../Styles/styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const CustomizedSection = () => {
  return (
    <div className="w-full block bg-rose-50 rounded-lg lg:flex p-2 mb-3">
      <div className="w-full lg-w[50%] m-auto">
        <img
          src="./Nav Bar pics/customized.jpg"
          alt="images"
          className="w-[390px] rounded-sm float-right"
        />

        <div className="w-full lg-[w-50%]">
          <h1 className="mr-[40px] mt-[110px] text-[48px] font-bold text-rose-400 font-Poppins text-center">
            Cherish the Extraordinary
          </h1>
          <p className="text-[30px] text-rose-600 text-center">
            "Personalize your moments with custom
            <br />
            delights, crafted just for you !"
          </p>
          <div
            className={`${styles.button} bg-rose-600 mt-3 h-[35px] ml-[27%] `}
          >
            <Link to="customized">
              <span className="text-rose-50 flex items-center font-medium">
                Get Started <AiOutlineArrowRight className="ml-1 mt-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedSection;
