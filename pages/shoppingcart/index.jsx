import React from "react";
import styles from "./ShoppingCart.module.css";
import ShoppingCartLa from "@/Components/ShoppingCard/shoppingLayout/ShoppingCartLa";

const shoppingCart = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container-shopping-card"]}>
        <ShoppingCartLa />
      </div>
    </div>
  );
};

export default shoppingCart;