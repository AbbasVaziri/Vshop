import React from "react";
import Image from "next/image";

import Carusel from "../carusel/Carusel";
import styles from "./IncredibleOffers.module.css";

const IncredibleOffers = (props) => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["carusel-container"]}>
        <Carusel cardsCount={3} data={props.data} />
      </div>
      <div className={styles["right-container"]}>
        <Image
          src="/images/Amazings.svg"
          className={styles["logo-incredible"]}
          height={100}
          width={150}
        />
        <Image
          src="/images/box.png"
          height={120}
          width={120}
          className={styles["box-incredible"]}
        />
        <h1 className={styles["show-all"]}> مشاهده همه </h1>
      </div>
    </div>
  );
};

export default IncredibleOffers;
