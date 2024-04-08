import React, { useState } from 'react'
import Headers from '../Components/Layout/Headers'
import Heading from '../Components/Layout/Heading'
import styles from '../Styles/styles'
import ProfileSideBar from "../Components/Profile/ProfileSideBar";
import ProfileContent from  "../Components/Profile/ProfileContent";

const ProfilePage = () => {
    const [active, setActive] = useState(1);
  return (
    <div>
        <Heading />
        <Headers />
        <div className={`${styles.section} flex  py-10`}>
            <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
        </div>
    </div>
  )
}

export default ProfilePage