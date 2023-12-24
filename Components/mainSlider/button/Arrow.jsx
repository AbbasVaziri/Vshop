import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./Arrow.module.css";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Arrow = () => {
  const swiper = useSwiper();

  return (
      <div className={styles["container-arrow"]}>
        <button
            className={styles['next-arrow']}
            onClick={() => swiper.slideNext()}
        >
          <GoChevronLeft />
        </button>
        <button
            className={styles['previous-arrow']}
            onClick={() => swiper.slidePrev()}
        >
          <GoChevronRight />
        </button>
      </div>
  );
};

export default Arrow;
