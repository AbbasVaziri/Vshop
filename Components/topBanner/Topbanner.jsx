import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Topbanner.module.css";
import { GET } from "@/repository/AxiosRepository";

const Topbanner = () => {
  const [topBannerData, setTopBannerData] = useState("");

  useEffect(() => {
    GET("/topBanner").then((response) => setTopBannerData(response.data));
  }, []);

  return (
    <div className={styles["outer-container"]}>
      <Image
        src={topBannerData.imageUrl}
        className={styles["banner"]}
        fill
        alt=""
      />
    </div>
  );
};

export default Topbanner;