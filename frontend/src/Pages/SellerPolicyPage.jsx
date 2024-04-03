import React from "react";
import { TiHeart } from "react-icons/ti";
import Footer from "../Components/Layout/Footer";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";

const SellerPolicyPage = () => {
  return (
    <div>
      <Heading activeHeading={7} />
      <Headers activeHeading={7} />
      <h1 className="text-3xl font-bold text-rose-950 text-center">
        Seller Policy
      </h1>

      <div className="flex items-center mt-[15px]">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Seller Criteria for Crafity:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        The sellers who sell at Crafity should be home-entrepreneurs i.e.,
        selling from their homes and the products they sell here should be
        homemade, customized or handpicked by them. This platform is not meant
        for resellers or wholesalers. If any products or sellers violate this,
        then the respective page would be removed from the Crafity Platform.
      </h3>

      <div className="flex items-center mt-[15px]">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Sell authentic products:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        The products displayed by you in your page should be either created by
        you or you should have the authority to display and sell the items. If
        any complaints are raised against your products, then you should remove
        the product immediately from the Crafity website and you alone would
        have to face the legal consequences related to your product. Also, the
        quality/ ingredients of the product that is delivered to the customer
        should be the same as that mentioned in the product description or the
        Order Invoice. If the products are found to be harmful to the buyers
        then you would be solely held responsible and would have to bear all the
        legal and financial consequences and not Crafity.{" "}
      </h3>

      <div className="flex items-center mt-[15px]">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Means of communication between Crafity and the sellers:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        Once you are a registered seller of Crafity, you give us the authority
        to communicate official matters with you through your registered email
        ID, mobile number, and address. If you face any issues regarding the
        same you can always connect with your Crafity Buddy or Customer Care
        executives.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Communicating with buyers for orders:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        You should only use the Crafity website for taking orders. Any personal
        information or something which is not related to the current order
        cannot be shared through the Crafity platform. The communication should
        be in a friendly and well-mannered tone and the buyer should not feel
        offended at any point. Also, you should not use Crafity to showcase your
        products and then redirect customers to another medium to save the
        commission fee. If noted, you would be immediately removed from the
        Crafity platform.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">Shipping Policy:</h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        You should be taking care of the shipping of your orders and the
        associated delivery charges. If there are any delays in the delivery of
        the Good(s) then you, as a seller, are responsible and are answerable to
        the customer.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Promoting content posted in Crafity:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        If you are a registered seller of Crafity, then Crafity has the full
        right to promote the content that you upload on the Crafity website to
        Scoop My art social media pages like Instagram, Facebook, Pinterest etc.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">Illegal contracts:</h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        If one seller gets into a contract with another seller of Crafity, then
        Crafity is in no way responsible for any issues associated with such a
        contract.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Seller Protection Policy:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        We know the passion and hard work you have put behind making your
        products. If you feel that your product styles have been copied and
        someone has reproduced it without your permission at Crafity you should
        complain to us immediately so that we can take further action.{" "}
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Crafity Website Policies:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        Crafity reserves all the rights for the website and thus can make any
        changes to the website,as well as these terms and conditions, related to
        the site. Also if a seller is not found to adhere to the Site policies
        then Crafity has the power to remove the seller from the platform.
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">Privacy Policy:</h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        For taking orders, sellers may contact the buyer personally, through
        email, call or messages. If the connection has been established through
        Crafity the seller should not contact the buyer for reasons other than
        the order. If any complaint is received and hence the seller is proven
        guilty, then serious action would be taken against the respective
        seller. And also vice versa, if the seller feels that their personal
        information is being misused they should complaint immediately to the
        Customer Executive team.
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Excellent Customer Service:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950">
        As Crafity believes in a high level of customer satisfaction, you are
        expected to treat the buyers respectfully. Starting from order
        confirmation to order delivery, everything needs to be on time. If the
        product is unavailable or due to any reason cannot be delivered, then
        the order needs to be canceled immediately. The product quality should
        be maintained and as mentioned in the product description. The concerns
        of your customers should be given high priority and solved urgently. If
        in any case you are unable to contact your customer then inform the
        Crafity Team and we would contact the customer on your behalf.
      </h3>

      <div className="flex items-center mt-[15px] ">
        <TiHeart size={20} style={{ marginLeft: "50px", color: "coral" }} />
        <h2 className="font-bold text-rose-700 ml-3">
          Return, Cancellation and Refund policy:
        </h2>
      </div>
      <h3 className="ml-[70px] mt-3 text-rose-950 mb-10">
        As all the goods are made/ sourced by you as per special customer
        request, Crafity does not have a return or refund policy. In terms of
        cancellation, if the order is cancelled by you, then the full order
        amount needs to be refunded to the customer. If the order is cancelled
        by your customer then you need not refund the amount. In cases where the
        work has not been started and you have not incurred any losses, you have
        the choice to refund the amount to the customer and thus contribute to
        our community’s vision of providing excellent customer service.
      </h3>
      <Footer />
    </div>
  );
};

export default SellerPolicyPage;
