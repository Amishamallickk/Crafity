import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productData } from "../../Static/data";
import styles from "../../Styles/styles";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";

const Headers = ({activeHeading}) => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchData, setsearchData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  console.log(user)


  const handleSearchChange = (e) => {
    const term = e.target.value;
    setsearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setsearchData(filteredProducts);
  };

  return (
    <>
    {
      loading ? (
        null
      ) : (
        <>
      <div className={`${styles.section}`}>
        <div className="flex justify-center">
          <div className="hidden 800px:h-[60px] 800px:my-[20px] 800px:flex items-center justify-between">
            <Link to="/">
              <img
                src={require("../../Assests/logo1.png")}
                className="w-40 h-25 pl-5"
                alt="logo"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="w-[50%] relative py-9 px-15 pl-5 pr-5">
            <input
              type="text"
              placeholder="Search Products...."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-rose-200 border-[2px] rounded-md bg-rose-50"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer mt-9 mr-4 text-rose-500 w-9 py-1"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          {/* Login Button */}
          {/* <div className="py-4 pr-4">
            <div className={`${styles.loginbutton}`}>
            { isAuthenticated ? (
                <Link to="/profile">
                <h1 className="text-[#ee534f] flex items-center font-bold">
                  My Account
                </h1>
              </Link>
              ) : (
                <Link to="/login">
                <h1 className="text-[#ee534f] flex items-center font-bold">
                  Login
                </h1>
              </Link>
              )}
              
            </div>
          </div> */}

          {/* Sell with us button */}
          <div className="py-4 pr-2">
            <div className={`${styles.button}`}>
              <Link to="/shop-create">
                <h1 className="text-[#ee534f] flex items-center font-bold">
                  Sell with Us
                </h1>
              </Link>
            </div>
          </div>
          <div className="mb-2 flex justify-end">
            
          {/* Shopping Cart */}
          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer ml-2" onClick={() => setOpenCart(true)}>
              <AiOutlineShoppingCart size={30} className="text-rose-600" />
              <span class="absolute right-0 top-0 rounded-full bg-[#ffeaea] w-3.5 h-3.5 top right p-0 m-0 text-rose-700 font-mono text-[11px]  leading-tight text-center">
                3
              </span>
            </div>
          </div>

          {/* User Profile */}
          <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                  <img src={`${backend_url}${user.avatar}`} className="w-[30px] h-[30px] rounded-full" alt="" />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={28} className="text-rose-600 mx-5" />
                  </Link>
                )}
              </div>
            </div>
          

          {/* shopping cart popup */}
          {
            openCart ? (
              <Cart setOpenCart={setOpenCart}/>
            ) : null
          }
        </div>
        </div>
      </div>

      {/* mobile header */}
      {/* <div className="w-full h-[70px] fixed bg-[#ff] z-50 top-0 left-0 shadow-sm">
        <div className="w-full flex items-center justify-between">
        </div>
      </div> */}
    </>
      )
    }
    </>
  );
};

export default Headers;
