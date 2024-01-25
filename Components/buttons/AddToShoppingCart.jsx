import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddToShoppingCart.module.css";
import { addNewItem } from "@/Redux/features/shoppingCart/ShoppingCartSlice";

const ShoppingCartItemCounter = ({ product }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addNewItem(product));
  };

  return (
    <div className={styles["outer-container"]} onClick={clickHandler}>
      <span>افزودن به سبد</span>
    </div>
  );
};

export default ShoppingCartItemCounter;
