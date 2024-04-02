import Card from "@/Components/ShoppingCard/Card";
import { GETT } from "@/repository/FetchApiRepository";
import React, {useEffect, useState} from "react";
import styles from "./Cat.module.css";
import CustomPagination from "@/Components/pagination/CustomPagination";
import {Skeleton} from "@mui/material";

const Cat = ({ data }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (loading) {

        return(<>
            <div className={styles['loading-container']}>
                <Skeleton width='95%' height='20vh' animation='wave'/>
            </div>
        </>)
    }

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