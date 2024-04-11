import React from 'react'
import AllProducts from "../Components/Shop/AllProducts";
import DashboardHeader from '../Components/Shop/Layout/DashboardHeader';
import DashboardSideBar from '../Components/Shop/Layout/DashboardSideBar';

const ShopAllProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={3} />
            </div>
            <div className="w-full justify-center flex">
                <AllProducts />
            </div>
          </div>
    </div>
  )
}

export default ShopAllProducts