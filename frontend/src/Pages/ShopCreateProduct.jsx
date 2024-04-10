import React from 'react';
import CreateProduct from "../Components/Shop/CreateProduct.jsx";
import DashboardHeader from '../Components/Shop/Layout/DashboardHeader';
import DashboardSideBar from '../Components/Shop/Layout/DashboardSideBar';

const ShopCreateProduct = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={4} />
            </div>
            <div className="w-full justify-center flex">
                <CreateProduct />
            </div>
          </div>
    </div>
  )
}

export default ShopCreateProduct