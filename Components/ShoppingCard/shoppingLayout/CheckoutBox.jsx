import React from "react";
import styles from "./CheckoutBox.module.css";
import { useSelector } from "react-redux";

const CheckoutBox = () => {
  const { totalPrice, totalPaid } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <div className={styles["left-container"]}>
        <div className={styles["detail-sabad-kharid"]}>
          <div className={styles["all-price"]}>
            <h2>قیمت کالاها</h2>
            <h3>{totalPrice.toLocaleString()}</h3>
          </div>
          <div className={styles["sum-products"]}>
            <h2>جمع سبد خرید</h2>
            <h3>{totalPaid.toLocaleString()}</h3>
          </div>
          <div className={styles["sode-shoma"]}>
            <h2>سود شما از این خرید</h2>
            <h3>10%</h3>
          </div>
          <button className={styles["order"]}>ثبت سفارش</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutBox;
