import React from "react";
import styles from "./ShoppingCartSingleItem.module.css";
import Image from "next/image";
import ShoppingCartItemCounter from "../buttons/ShoppingCartItemCounter";
import Card from "./Card";
import ShoppingCartLa from "./shoppingLayout/ShoppingCartLa";

const ShoppingCartSingleItem = ({ product }) => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["right-container"]}>
        {/* <Card product={product}/> */}
        {/* <ShoppingCartLa product={product}/> */}
      </div>
      <div className={styles["left-top-container"]}></div>
      <div className={styles["left-bottom-container"]}></div>
    </div>
  );
};

export default ShoppingCartSingleItem;
 