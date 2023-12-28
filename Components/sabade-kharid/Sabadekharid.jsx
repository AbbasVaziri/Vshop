import React from "react";
import Link from "next/link";
import { TfiShoppingCart } from "react-icons/tfi";
import { useSelector } from "react-redux";
import styles from "./Sabadekharid.module.css";

const Sabadekharid = () => {
  const { totalCount } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <Link href={"/shoppingCart"} className={styles['container-icon']}>
        <TfiShoppingCart className={styles["icon"]} />
        <span className={styles["count"]}>{totalCount}</span>
      </Link>
      <span className={styles["pipe"]}>|</span>
    </>
  );
};

export default Sabadekharid;
