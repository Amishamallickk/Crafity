import React from "react";
import Footer from "../Components/Layout/Footer";
import Heading from "../Components/Layout/Heading";
import Header from "../Components/Layout/Headers";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";

const OrderSuccessPage = () => {
  return (
    <div>
        <Heading />
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={150} height={150} />
      <h5 className="text-center mb-14 text-[25px] text-[#670a34a1] font-medium">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
