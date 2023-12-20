import React from "react";
import styles from "./EmptyShoppingCard.module.css";

const EmptyShoppingCard = () => {
  return (
    <div>
      <header className={styles["header"]}>
        <h2>خرید بعدی</h2>
        <h1 className={styles["haeder-active"]}>سبد خرید</h1>
      </header>

      <div className={styles["outer-container"]}>
        <div className={styles["container"]}>
          <img
            src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
            alt=""
          />
          <h1>سبد خرید شما خالی است!</h1>
          <h3>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</h3>
        </div>
      </div>
    </div>
  );
};

export default EmptyShoppingCard;
