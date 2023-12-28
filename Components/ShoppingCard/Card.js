import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import AddToShoppingCart from "../buttons/AddToShoppingCart";
import ShoppingCartItemCounter from "../buttons/ShoppingCartItemCounter";
import NonExistent from "../non-existent/NonExistent";
import styles from "./Card.module.css";

const Card = ({ product }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["incredible-offer-image-container"]}>
        {product.incredibleOffers === true ? (
          <Image
            alt={product.name}
            src="/images/IncredibleOffer.svg"
            width={200}
            height={15}
          />
        ) : null}
      </div>
      <div align="justify" className={styles["product-name"]}>
        {" "}
        {product.name.substring(0, 25)}
        {product.name.length > 25 ? "..." : null}
      </div>
      <Image
        alt={product.name}
        src={product.indexImageUrl}
        width={200}
        height={200}
      />
      {product.priceWithDiscount === 0 ? (
        <div className={styles["price-container"]}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
        </div>
      ) : (
        <div className={styles["price-detail"]}>
          <div className={styles["price-container"]}>
            <div className={styles["price-before-off"]}>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              تومان
            </div>
            <div>
              {product.priceWithDiscount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              تومان
            </div>
          </div>
          <label className={styles["off-percent"]}>
            {Math.floor(
              ((product.price - product.priceWithDiscount) / product.price) *
                100,
            )}
            %
          </label>
        </div>
      )}

      {shoppingCart.items.find((item) => item.id === product.id) ? (
        <div className={styles["button-counter"]}>
          <ShoppingCartItemCounter productId={product.id} />
        </div>
      ) : product.stock !== 0 ? (
        <AddToShoppingCart product={product} />
      ) : (
        <NonExistent />
      )}
    </div>
  );
};

export default Card;