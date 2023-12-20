import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./Arrow.module.css";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Arrow = () => {
  const swiper = useSwiper();

  return (
      <div className={styles["container-arrow"]}>
        <button onClick={() => swiper.slideNext()}>
          <GoChevronLeft className={styles['next-arrow']} />
        </button>
        <button onClick={() => swiper.slidePrev()}>
          <GoChevronRight className={styles['previous-arrow']}/>
        </button>
      </div>
  );
};

export default Arrow;
