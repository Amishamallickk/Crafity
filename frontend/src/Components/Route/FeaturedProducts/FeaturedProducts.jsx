import React, { useEffect, useState } from "react";
import { productData } from "../../../Static/data";
import styles from "../../../Styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} pt-3 font-medium text-rose-900`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 md-gap-[25px] lg:grid-cols-5 lg:gap-[25px] xl:grid-cols-6 xl:gap-[30px] mb-5 mt-5">
          
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)} 
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
