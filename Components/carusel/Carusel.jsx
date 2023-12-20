import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./CaruselArrow";
import { PrevArrow } from "./CaruselArrow";
import styles from "./Carusel.module.scss";
import Card from "../ShoppingCard/Card";

const Carusel = (props) => {
  let settings = {
    className: styles["innerSliderDiv"],
    adaptiveHeight: true,
    speed: 700,
    centerMode: true,
    centerPadding: "2em",
    swipeToSlide: true,
    rtl: true,
    slidesToShow: props.cardsCount,
    slidesToScroll: 1,
    nextArrow: <NextArrow width="30px" height="30px" />,
    prevArrow: <PrevArrow width="30px" height="30px" />,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          speed: 100,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <Slider {...settings} >
      {props.data.map((item) => {
        return <Card key={item.id} product={item} />;
      })}
    </Slider>
  );
};

export default Carusel;