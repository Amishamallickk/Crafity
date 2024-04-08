// import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import {
  AboutUsPage, ActivationPage, BuyerPolicyPage, ContactUsPage, FAQPage, HomePage, LoginPage, OrderSuccessPage, PrivacyPolicyPage,
  ProductDetailsPage,
  ProductsPage,
  SellerPolicyPage, ShopCreatePage, ShopLoginPage, SignUpPage, TermsandConditionPage
} from "./Routes/Routes.js";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/FAQs" element={<FAQPage />} />
        <Route path="/TermsandConditions" element={<TermsandConditionPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/SellerPolicy" element={<SellerPolicyPage />} />
        <Route path="/BuyerPolicy" element={<BuyerPolicyPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

export default App
