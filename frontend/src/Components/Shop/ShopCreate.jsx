import axios from "axios";
import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../../Styles/styles";
import { server } from "../../server";

const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [shop_name, setName] = useState("");
  // const [role]
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${server}/seller/create-seller`, {
        role:"seller",
        shop_name,
        email,
        password,
        avatar,
        zipcode,
        address,
        mobile,
      })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setZipcode();
        setAddress("");
        setMobile();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-rose-600">
          Register as a Seller !
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[35rem]">
        <div className="bg-red-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm-10 font-bold text-white"
              >
                Shop Name
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  required
                  value={shop_name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm-10 font-bold text-white"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="phone-number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm-10 font-bold text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm-10 font-bold text-white"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="address"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm-10 font-bold text-white"
              >
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="zipcode"
                  required
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm-10 font-bold text-white"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-rose-100 rounded-md shadow-sm placeholder-rose-100 focus:outline-none focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer text-rose-800"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer text-rose-800"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-rose-600"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8 text-rose-800" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-rose-600 rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-rose-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
              >
                Submit
              </button>
            </div>
            
            <div className={`${styles.noramlFlex} w-full`}>
              <Link to="/shop-login" className="text-rose-600 pl-2 font-medium flex items-center justify-center">
              Already have an account? Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopCreate;
