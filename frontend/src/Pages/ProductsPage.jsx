import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";
import ProductCard from "../Components/Route/ProductCard/ProductCard.jsx";
import { productData } from "../Static/data";
import styles from "../Styles/styles.js";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
    // window.scrollTo(0,0);
  }, [categoryData]);
  return (
    <div>
      <Heading activeHeading={3} />
      <Headers activeHeading={3} />
      <br />
      <br />
      <br />
      <div className={`${styles.section} mt-[-50px]`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
          {data && data.length === 0 ? <h1 className="text-center w-full pb-[110px] text-[20px] font-Roboto text-rose-600 font-medium">No products found!!</h1> : null}
      </div>
    </div>
  );
};

export default ProductsPage;
