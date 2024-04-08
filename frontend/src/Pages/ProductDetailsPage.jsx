import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Layout/Footer';
import Headers from '../Components/Layout/Headers';
import Heading from '../Components/Layout/Heading';
import ProductDetails from "../Components/Products/ProductDetails";
import { productData } from '../Static/data';

const ProductDetailsPage = () => {
    const {name} = useParams();
    const [data,setData] = useState(null);
    const productName = name.replace(/-/g," ");


    useEffect(() => {
        const data = productData.find((i) => i.name === productName);
        setData(data);
    },[productName])
  return (
    <div>
        <Heading />
        <Headers />
        <ProductDetails data={data} />
        <Footer />
    </div>
  )
}

export default ProductDetailsPage