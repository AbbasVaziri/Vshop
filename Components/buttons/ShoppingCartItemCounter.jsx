import React from "react";
import {
  decreaseCount,
  increaseCount,
  removeItem,
} from "@/Redux/features/shoppingCart/ShoppingCartSlice";
import styles from "./ShoppingCartItemCounter.module.css";

import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";

const ShoppingCartItemCounter = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const itemCount = shoppingCart.items.filter(
    (item) => item.id === productId,
  )[0].count;

  return (
<>
    <div className={styles["outer-container"]}>
      <span onClick={() => dispatch(increaseCount(productId))}>+</span>
      <span>{itemCount}</span>
      {itemCount === 1 ? (
        <BsFillTrashFill
          size={"16px"}
          cursor={"pointer"}
          onClick={() => dispatch(removeItem(productId))}
        />
      ) : (
        <span onClick={() => dispatch(decreaseCount(productId))}>-</span>
      )}
    </div>
</>
  );
};

export default ShoppingCartItemCounter;
