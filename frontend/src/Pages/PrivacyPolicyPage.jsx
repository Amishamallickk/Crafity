import React from "react";
import { TiHeart } from "react-icons/ti";
import Footer from "../Components/Layout/Footer";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Heading activeHeading={6} />
      <Headers activeHeading={6} />
      <h1 className="text-3xl font-bold text-rose-950 text-center">
        Privacy Policy
      </h1>
      <h3 className=" text-rose-950 text-justify mt-3 ml-8 mr-8">
        This privacy policy sets out how the Crafity store uses and protects any
        information that you give Crafity when you use this website. Crafity is
        committed to ensuring that your privacy is protected. Should we ask you
        to provide certain information by which you can be identified when using
        this website, then you can be assured that it will only be used in
        accordance with this privacy statement. <br />
        Online transactions are electronically encrypted to ensure that your
        financial data is safe and secure; you may use your credit card online
        with confidence. <br />
        In addition, your address, phone number, and financial data will be used
        only by Crafity and will never be sold or revealed to anyone else.
        <br />
        Crafity is committed to maintaining your confidence and trust, and
        accordingly maintains the following privacy policy to protect personal
        information you provide online: <br />
        It is our policy that personal information, such as your name, address,
        email address, telephone number, and financial information is private
        and confidential.
        <br /> Your personal information will be used only by Crafity and will
        never be sold or revealed to outside sources. What we collect:
      </h3>
      <h2 className="font-bold text-rose-700 text-justify mt-3 ml-8 mr-8">
        We may collect the following information:
      </h2>
      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">Name and date of birth</h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">Contact information including email address</h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">
          Demographic information such as postcode, preferences and interests
        </h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">
          Other information relevant to customer surveys and/or offers
        </h4>
      </div>

      <h2 className="font-bold text-rose-700 text-justify mt-3 ml-8 mr-8">
        What we do with the information we gather
      </h2>
      <h3 className=" text-rose-950 text-justify ml-8 mr-8">
        We require this information to understand your needs and provide you
        with a better service, and in particular for the following reasons:
      </h3>
      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2 ">Internal record keeping</h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={20}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">
          We may use the information to improve our products and services.
        </h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950 ">
        <TiHeart
          size={25}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">
          We may periodically send promotional emails about new products,
          special offers or other information which we think you may find
          interesting using the email address which you have provided.
        </h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={30}
          style={{ marginLeft: "50px", color: "coral", marginTop: "1px" }}
        />
        <h4 className="ml-2">
          From time to time, we may also use your information to contact you for
          market research purposes. We may contact you by email, phone, fax or
          mail. We may use the information to customize the website according to
          your interests.
        </h4>
      </div>

      <div className="flex items-center mt-[15px] text-rose-950">
        <TiHeart
          size={25}
          style={{
            marginLeft: "50px",
            color: "coral",
            marginTop: "1px",
            marginBottom: "40px",
          }}
        />
        <h4 className="ml-2 mb-10">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please write to or email us as soon as possible. We
          will promptly correct any information found to be incorrect.
        </h4>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
