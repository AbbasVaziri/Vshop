import React from "react";
import Topbanner from "../topBanner/Topbanner";
import SearchBox from "../search/SearchBox";
import MainSliderSwiper from "../mainSlider/MainSliderSwiper";
import Sabadekharid from "../sabade-kharid/Sabadekharid";
import Profile from "../userProfile/Profile";
import MenuHeader from "../menuHedaer/MenuHeader";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <Topbanner />
      <div className={styles["outer-container"]}>
        <div className={styles["container-left"]}>
          <Sabadekharid />
          <Profile />
        </div>
        <div className={styles["conatiner-right"]}>
          <SearchBox />
        </div>
      </div>
      <MenuHeader />
      <MainSliderSwiper />
    </>
  );
};

export default Header;