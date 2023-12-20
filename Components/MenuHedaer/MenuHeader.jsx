import React from "react";
import styles from "./MenuHeader.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { MdAddCard , MdLocalOffer } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { GiPriceTag } from "react-icons/gi";
import Link from 'next/link'

const MenuHeader = () => {
  return (
    <>
      <div className={styles["outer-container"]}>
        <div className={styles["Categorization-container"]}>
          <IoMenuOutline />
          <a>دسته بندی کالاها</a>
        </div>

        <div className={styles["incredible-container"]}>
          <MdLocalOffer />
          <Link href="/Products/category/Harajestoon" style={{color:"black"}}>شگفت انگیز ها</Link>
        </div>
        <div className={styles["supermarket-container"]}>
          <SiMarketo />
          <a>سوپرمارکت</a>
        </div>
        <div className={styles["giftcard-container"]}>
          <MdAddCard />
          <a>کارت هدیه</a>
        </div>
        <div className={styles["bestseller-container"]}>
          <FaFire />
          <a>پرفروش ترین ها</a>
        </div>
        <div className={styles["sales-container"]}>
          <GiPriceTag />
          <a>تخفیف ها و پیشنهاد ها</a>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
