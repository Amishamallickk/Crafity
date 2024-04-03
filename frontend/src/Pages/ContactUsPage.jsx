import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Layout/Footer";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";

const ContactUsPage = () => {
  return (
    <div>
      <Heading activeHeading={5} />
      <Headers activeHeading={5} />
      <img
        src="./Nav Bar pics/contact us.png"
        alt="contact us"
        className="w-[400px] ml-[410px]"
      />
      <div className="w-full lg-[w-50%]">
        <h1 className=" mt-[10px] text-[48px] font-extralight text-rose-400 text-center font-Satisfy">
          CONTACT US ANYTIME
        </h1>
        <p className="text-[30px] text-rose-600 text-center">
          " Reach out at your convenience "
        </p>
        <div className="flex items-center mt-[15px] ml-[530px]">
          <AiFillInstagram
            size={30}
            style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
          />
          <a
            href="https://www.instagram.com/_the_charming_crafts_?igsh=OWtxY3hlcDM2OHdp"
            className="text-rose-600"
          >
            @crafity
          </a>
        </div>

        <div className="flex items-center mt-[15px] ml-[530px]">
          <BiSolidPhoneCall
            size={30}
            style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
          />
          <a href="tel:+91.8327723133" className="text-rose-600">
            +91 8327723133
          </a>
        </div>
        
        <div className="flex items-center mt-[15px] ml-[530px] mb-10">
          <MdEmail
            size={30}
            style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
          />
          <a href="mailto:thecharmingc@gmail.com" className="text-rose-600">
            contact@crafity.gifts
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
