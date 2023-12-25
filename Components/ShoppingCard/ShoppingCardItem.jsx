/** @format */

import React from "react";
import { useSelector } from "react-redux";
import ShoppingCartSingleItem from "./ShoppingCartSingleItem";
import ShoppingCartLa from "./shoppingLayout/ShoppingCartLa";

const ShoppingCardItem = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  if (shoppingCart.totalCount === 0) {
    return <h1>your cart is empty</h1>;
  }

  return (
    <div>
      {shoppingCart.items.map((item) => {
        return <ShoppingCartSingleItem product={item} />;
      })}
    </div>
  );
};

export default ShoppingCardItem;
