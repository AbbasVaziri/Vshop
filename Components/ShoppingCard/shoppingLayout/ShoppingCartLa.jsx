import React from "react";
import styles from "./ShoppingCartLa.module.css";
import { useSelector } from "react-redux";
import { HiDotsVertical } from "react-icons/hi";
import EmptyShoppingCard from "@/Components/emptyshoppingcard/EmptyShoppingCard";
import CheckoutBox from "./CheckoutBox";
import ShoppingCartItemCounter from "@/Components/buttons/ShoppingCartItemCounter";

const ShoppingCartLa = () => {
  const { totalCount, items } = useSelector((state) => state.shoppingCart);

  if (totalCount === 0) {
    return <EmptyShoppingCard />;
  } else
    return (
      <>
        <div className={styles["container-all"]}>
          <header className={styles["header"]}>
            <h1>خرید بعدی</h1>
            <h1 className={styles["header-active"]}>سبد خرید</h1>
          </header>
          <div className={styles["outer-container"]}>
            <div className={styles["right-container"]}>
              <div className={styles["header-right"]}>
                <h3>سبد خرید شما</h3>
                <HiDotsVertical className={styles["icon-menu"]} />
              </div>
              <div className={styles["sabad-kharid-product"]}>
                {items.map((item) => {
                  return (
                    <div key={item.id} className={styles["sabad"]}>
                      <img src={item.indexImageUrl} alt="" />
                      <div className={styles["content-container"]}>
                        <h2>{item.name}</h2>
                        <h3>
                          {item.priceWithDiscount === 0
                            ? item.price.toLocaleString()
                            : item.priceWithDiscount.toLocaleString()}
                        </h3>
                      </div>
                      <ShoppingCartItemCounter productId={item.id} />
                    </div>
                    //todo: write better css for counter
                  );
                })}
              </div>
            </div>
            <CheckoutBox />
          </div>
        </div>
      </>
    );
};

export default ShoppingCartLa;
