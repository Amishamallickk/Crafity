import axios from "axios";
import React, { useState } from 'react';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { categoriesData } from '../../Static/data';
import { server } from "../../server";

const CreateProduct = () => {
    const { seller } = useSelector((state) => state.seller);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    // const [tags, setTags] = useState("");
    const [price, setPrice] = useState();
    const [discount_price, setDiscount_Price] = useState();
    const [stock, setStock] = useState();


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(sessionStorage.getItem("loggedData"));
      let loggedUserInfo = JSON.parse(sessionStorage.getItem("loggedData"));

      await axios
        .post(
          `${server}/products/create`,
          {
            name,
            description,
            category,
            price,
            discount_price,
            stock,
            shop:loggedUserInfo.user._id
            // image_Url,
          },
          // { withCredentials:true}
        )
        .then((res) => {
          toast.success("Product Created Successfully!");
          navigate("/dashboard-products");
          // window.location.reload(true);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    };
  
    // const handleImageChange = (e) => {
    //     e.preventDefault();

    //     let files = Array.from(e.target.files);
    //     setImages((prevImages) => [...prevImages, ...files])
    // }
    return (
    <div className="w-[90%] 800px:w-[70%] bg-rose-100  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center text-rose-500">Create Product</h5>

      {/* create product form */}
      <form 
      onSubmit={handleSubmit}
      >
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-rose-200 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-rose-50"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your product name..."
          />
        </div>
        <br />

        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-rose-200 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm bg-rose-50"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />

        <div>
          <label className="pb-2 ">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px] border-rose-200 bg-rose-50"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
{/* 
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-rose-200 bg-rose-50 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your product tags..."
          />
        </div>
        <br /> */}

        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={price}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-rose-200 bg-rose-50 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter your product price..."
          />
        </div>
        <br />

        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discount_price}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-rose-200 bg-rose-50 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            onChange={(e) => setDiscount_Price(e.target.value)}
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />

        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-rose-200 bg-rose-50 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter your product stock..."
          />
        </div>
        <br />

        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            // onChange={handleImageChange}
          />
          {/* <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3 " color="#FF007F" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div> */}
          <br />

          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-red-200 bg-rose-300 rounded-[3px] placeholder-white text-white font-semibold focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct
