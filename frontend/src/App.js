// import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
// import ProtectedRoute from "./Routes/ProtectedRoute.js";
// import SellerProtectedRoutes from "./Routes/SellerProtectedRoutes"
import {
  AboutUsPage, ActivationPage, BuyerPolicyPage,
  CheckoutPage,
  ContactUsPage, FAQPage, HomePage, LoginPage, OrderSuccessPage, PrivacyPolicyPage,
  ProductDetailsPage,
  ProductsPage, ProfilePage,
  SellerPolicyPage, ShopCreatePage, ShopLoginPage, SignUpPage, TermsandConditionPage
} from "./Routes/Routes.js";
import { ShopDashboardPage, ShopHomePage, ShopCreateProduct } from "./Routes/ShopRoutes.js";
// import { loadSeller, loadUser } from "./redux/actions/user";
// import Store from './redux/store.js';


const App = () => {


  // useEffect(() => {
  //   Store.dispatch(loadUser());
  //   Store.dispatch(loadSeller());
  // },[])

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
        <Route
          path="/checkout"
          element={
            // <ProtectedRoute>
              <CheckoutPage />
            // </ProtectedRoute>
          }
        />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route path="/profile" element={ <ProfilePage />} />
          {/* // <ProtectedRoute >
          // <ProfilePage />
          // </ProtectedRoute>
          // }/> */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/SellerPolicy" element={<SellerPolicyPage />} />
        <Route path="/BuyerPolicy" element={<BuyerPolicyPage />} />

          {/* Shop Routes */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/shop/:id" element={<ShopHomePage />} />
        <Route path="/dashboard" element={<ShopDashboardPage />} />
        <Route path="/dashboard-create-product" element={<ShopCreateProduct />} />
        {/* <Route path="/shop/:id" element={<SellerProtectedRoutes><ShopHomePage /></SellerProtectedRoutes>} />
        <Route path="/dashboard" element={<SellerProtectedRoutes><ShopDashboardPage /></SellerProtectedRoutes>} /> */}


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
