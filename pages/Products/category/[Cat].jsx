import Card from "@/Components/ShoppingCard/Card";
import { GETT } from "@/repository/FetchApiRepository";
import React from "react";
import styles from "./Cat.module.css";
import CustomPagination from "@/Components/pagination/CustomPagination";

const Cat = ({ data }) => {
  return (
    <>
      <div className={styles["container"]}>
        {data.map((item) => {
          return <Card product={item} />;
        })}
      </div>
      <CustomPagination/>
    </>
  );
};

export default Cat;

export async function getServerSideProps(context) {
  const response = await GETT(`/products/${context.params.Cat}`);
  const data = await response.json();

  return {
    props: { data },
  };
}