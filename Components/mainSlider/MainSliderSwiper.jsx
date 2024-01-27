import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MainSliderSwiper.module.css";
import Arrow from "./button/Arrow";
import Context from "@/contextApi/Context";

const MainSliderSwiper = () => {
  const { mainSliderImages } = useContext(Context);

  return (
    <>
      <section className={styles["slider-container"]}>
        <Swiper
          className={styles["swiper"]}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "active",
          }}
        >
          {mainSliderImages.map((product) => {
            return (
              <div key={product.id}>
                <SwiperSlide>
                  <img
                      key={product.id}
                    src={product.original}
                    alt=""
                    className={styles["slider-images"]}
                  />
                </SwiperSlide>
              </div>
            );
          })}
          <div className={styles["arrow"]}>
            <Arrow />
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default MainSliderSwiper;