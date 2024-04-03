import React from "react";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { PiGiftLight } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Layout/Footer";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";

const AboutUsPage = () => {
  return (
    <div>
      <Heading activeHeading={7} />
      <Headers activeHeading={7} />
      <img
        src="./Nav Bar pics/about us.png"
        alt="about us"
        className="w-[100%] h-[600px] mt-1 py-2 px-2 bg-rose-50"
      />
      <h1 className="mt-[10px] text-[30px] font-extralight text-rose-300 text-center font-Satisfy">
        We're on a mission to save creativity
      </h1>
      <h2 className="text-rose-800 text-center mt-3 ml-20 mr-20">
        Having talked to many creators who sell unique products, we realized
        these products & brands deserved better recognition and fame. And thus
        was born the online marketplace for handmade & hand-picked stuff,
        Crafity!
      </h2>
      <h3 className="text-rose-500 text-center mt-3 ml-20 mr-20">
        <i>
          You can't buy Love, but you can buy Handmade, and that's kind of the
          same thing.
        </i>
      </h3>
      <p className="text-rose-900 mt-3 ml-10 mr-10 text-[20px]">
        Crafity's unique propositions:
      </p>
      <h3 className="text-rose-700 ml-10 mr-10 ">
        1. Contemporary design with customer touchpoints <br />
        2. Customer experience foundation with fanatical obsession to quality
        and service delivery.
        <br />
        3. Highly qualified management team with strong passion and energy,
        laser-like focus, vision and commitment for Crafity <br />
        4. Multiple categories of products by brand and by personality for every
        occasion.
        <br />
        5. Strong product insights and alliance with international brands.{" "}
        <br />
      </h3>
      <h3 className="text-rose-950 mt-3 ml-10 mr-10 text-[30px] font-Poppins">
        What do we stand for?
      </h3>
      <div className="sm:text-start grid grid-cols-3 gap-4 mb-7 ">
        <div className=" mt-[15px] ml-8  bg-rose-50">
          <SlPeople
            size={50}
            style={{
              marginLeft: "160px",
              color: "coral",
              marginBottom: "10px",
              marginTop: "15px",
              alignItems: "center",
            }}
          />
          <h4 className="ml-8 mr-8 mb-2 text-justify">
            <b>Hub for creative geniuses</b>
            <br />
            Whether you are looking for a platform to sell your creativity or
            searching for someone who can give wings to your imagination - then
            you are at the right place.
          </h4>
        </div>

        <div className=" items-center mt-[15px] ml-5  bg-rose-50">
          <MdOutlineEmojiPeople
            size={50}
            style={{
              marginLeft: "160px",
              color: "coral",
              marginBottom: "10px",
              marginTop: "15px",
              alignItems: "center",
            }}
          />
          <h4 className="ml-8 mr-8 mb-2 text-justify">
            <b>Customers are our first priority!</b>
            <br />
            We consider Crafity as a family - whether you are our seller or
            buyer. And we will go to any extent to make our fam delighted!
          </h4>
        </div>

        <div className=" items-center mt-[15px] ml-5 mr-5  bg-rose-50">
          <PiGiftLight
            size={50}
            style={{
              marginLeft: "160px",
              color: "coral",
              marginBottom: "10px",
              marginTop: "15px",
              alignItems: "center",
            }}
          />
          <h4 className="ml-8 mr-8 mb-2 text-justify">
            <b>Product Quality Assured</b>
            <br />
            We personally handpick the sellers and verify their shop and
            products before making it live. Our sellers strive to bring a smile
            on your face when you see the product.
          </h4>
        </div>
      </div>

      <h3 className="text-rose-400 mt-3 ml-10 mr-10 text-[30px] font-Poppins font-bold">
        Wanna take us for a Biriyani treat/ask a query?
      </h3>
      <p className="text-rose-900 ml-10 mr-10 text-[20px]">
        Feel free to reach out to us here:
      </p>
      <div className="flex items-center mt-[15px] ml-[30px]">
        <AiFillInstagram
          size={20}
          style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
        />
        <a
          href="https://www.instagram.com/_the_charming_crafts_?igsh=OWtxY3hlcDM2OHdp"
          className="text-rose-600"
        >
          @crafity
        </a>

        <BiSolidPhoneCall
          size={20}
          style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
        />
        <a href="tel:+91.8327723133" className="text-rose-600">
          +91 8327723133
        </a>

        <MdEmail
          size={20}
          style={{ marginLeft: "15px", cursor: "pointer", color: "red" }}
        />
        <a href="mailto:thecharmingc@gmail.com" className="text-rose-600">
          contact@crafity.gifts
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
