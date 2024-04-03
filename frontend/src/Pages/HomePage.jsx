import React from "react";
import Crafstars from "../Components/Layout/Crafstars";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";
import Slides from "../Components/Layout/Slides.jsx";
import Categories from "../Components/Route/Categories/Categories.jsx";
import FeaturedProducts from "../Components/Route/FeaturedProducts/FeaturedProducts.jsx";
import CustomizableProduct from "../Components/Features/CustomizableProduct";
import ProductReusable from "../Components/Features/ProductReusable.jsx";
import SellwithUs from "../Components/Features/SellwithUs.jsx";
import Footer from "../Components/Layout/Footer.jsx";


const HomePage = () => {
  return (
    <div>
      <Heading />
      <Headers activeHeading={1} />
      <Categories />
      <Slides />
      <Crafstars />
      <FeaturedProducts />
      <CustomizableProduct />
      <ProductReusable />
      <SellwithUs />
      <Footer />
    </div>
  );
};

export default HomePage;
