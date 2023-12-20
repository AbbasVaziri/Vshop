import React from "react";
import Link from "next/link";
import { TfiShoppingCart } from "react-icons/tfi";
import styles from "./Sabadekharid.module.css";
import { useSelector } from "react-redux";

const Sabadekharid = () => {
  const { totalCount } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <Link href={"/shoppingCart"}>
        <TfiShoppingCart className={styles["icon"]} />
        <span className={styles["count"]}>{totalCount}</span>
      </Link>
      <span className={styles["pipe"]}>|</span>
    </>
  );
};

export default Sabadekharid;
