import React, { useEffect, useState } from "react";
import { GETT } from "@/repository/FetchApiRepository";
import Card from "@/Components/ShoppingCard/Card";
import styles from "./[textForSearch].module.css";

const TextForSearch = ({ data }) => {
  return (
    <div className={styles["products-container"]}>
      {data.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default TextForSearch;

export async function getServerSideProps(context) {
  const response = await GETT(`/products/search/${context.params.textForSearch}`,);
  const data = await response.json();

  if (data.length === 0) {
    return {
      redirect: {
        destination: "/notfound",
      },
    };
  } else {
    return {
      props: { data },
    };
  }
}
