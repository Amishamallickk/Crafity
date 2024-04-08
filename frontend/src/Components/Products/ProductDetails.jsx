import React, { useState } from "react";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Styles/styles";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=5689ijhsgftyuikjhgn");
  };

return (
    <div className="bg-[#fffdf7]">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[70%]"
                /><br />
                <div className="w-full flex">
                  
                      <div
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={data?.image_Url[0].url}
                          alt=""
                          className="h-[120px]"
                          onClick={() => setSelect(0)}
                        />
                      </div>
                    
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ><img
                  src={data?.image_Url[1].url}
                  alt=""
                  className="h-[120px]"
                  onClick={() => setSelect(1)}
                />
                </div>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}₹
                  </h4>
                  <h3 className={`${styles.price} pl-3`}>
                    {data.price ? data.price + "₹" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-1 pe-3">
                    <div>
                  <button
                    className="bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[5px]">
                    {count}
                  </span>
                  <button
                    className="bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                </div>
                <div
                  className={`${styles.button} bg-rose-600 !mt-6 !rounded !h-11 flex items-center`}
                  
                >
                  <span className="text-rose-50 flex items-center font-medium">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-49">
                    <img
                      src={`${data.shop.shop_avatar.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2 border-rose-500"
                    />
                  
                  <div className="pr-8">
                    
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    
                    <h5 className="pb-3 text-[15px] font-Roboto font-medium text-rose-900">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  
                  <div className={`${styles.button} bg-rose-600 mt-4 !rounded !h-11`}
                  onClick={handleMessageSubmit}>
                        <span className="text-white flex items-center">
                            Send Message <AiOutlineMessage className="ml-1" />
                        </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({data}) => {
    const [active,setActive] = useState(1);
    return (
        <div className="bg-rose-50 px-3 800px:px-10 py-2 rounded ">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                <h5 className={"text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                onClick={() => setActive(1)}>
                    Product Details
                </h5>
                {active === 1 ? (
                    <div className={`${styles.active_indicator}`} />
                ) : null}
                </div>

                <div className="relative">
                <h5 className={"text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                onClick={() => setActive(2)}>
                    Product Reviews
                </h5>
                {active === 2 ? (
                    <div className={`${styles.active_indicator}`} />
                ) : null}
                </div>

                <div className="relative">
                <h5 className={"text-[#000] text-[18px] px-1 loading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                onClick={() => setActive(3)}>
                    Seller Information
                </h5>
                {active === 3 ? (
                    <div className={`${styles.active_indicator}`} />
                ) : null}
                </div>
            </div>

            {active === 1 ? (
            <>
                <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line font-Roboto">
                "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
                <br /><br />
                "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
                <br /><br />
                "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
                </p>
            </>
            ) : null}

            {active === 2 ? (
                <div className="w-fu;; justify-center min-h-[40vh] flex items-center">
                    <p className="font-Roboto">No Reviews Yet!</p>
                </div>
            ) : null }

            {active === 3 && (
            <div className="w-full block 800px:flex p-5">
                <div className="w-full 800px:w-[50%]">
                    <div className="flex items-center">
                        <img src={`${data.shop.shop_avatar.url}`} className="w-[50px] h-[50px] rounded-full border-rose-500" alt=""/>
                        <div className="pl-3">
                        <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                        <h5 className="pb-2 text-[15px] font-Roboto font-medium text-rose-900">({data.shop.ratings}) Ratings</h5>
                        </div>
                    </div>
            <p className="pt-2 font-Poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore recusandae ex assumenda officia modi perferendis porro tenetur dicta dolore fugit aperiam id natus ullam ipsa iure ipsum beatae velit!</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
              Joined on: <span className="font-[500]">14 March,2024</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:
                <span className="font-[500]">
                  500
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:
                <span className="font-[500]">354</span>
              </h5>
             <Link to="/">
                <div
                  className={`${styles.button} bg-pink-700 !rounded-[4px] !h-[39.5px] mt-4`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
            )}

            
        </div>
    )
}
export default ProductDetails;




