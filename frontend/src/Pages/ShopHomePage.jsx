import React from 'react'
import styles from '../Styles/styles'
import ShopInfo from "../Components/Shop/ShopInfo";
import ShopProfileData from "../Components/Shop/ShopProfileData";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section}`}>
         <div className="w-full flex py-10 justify-between">
          <div className="w-[25%] bg-rose-50 rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
            <ShopInfo isOwner={true} />
          </div>
          <div className="w-[72%] rounded-[4px]">
            <ShopProfileData isOwner={true} />
          </div>
         </div>
    </div>
  )
}

export default ShopHomePage