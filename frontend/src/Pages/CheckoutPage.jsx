import React from 'react';
import Checkout from "../Components/Checkout/Checkout.jsx";
import CheckoutSteps from "../Components/Checkout/CheckoutSteps.jsx";
import Footer from '../Components/Layout/Footer';
import Headers from '../Components/Layout/Headers';
import Heading from '../Components/Layout/Heading';

const CheckoutPage = () => {
  return (
    <div>
        <Heading />
        <Headers />
        <br />
        <br />
        <CheckoutSteps active={1} />
        <Checkout />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default CheckoutPage