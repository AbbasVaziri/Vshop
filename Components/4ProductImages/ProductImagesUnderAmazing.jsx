import React from "react";
import Image from "next/image";
import styles from "./ProductImagesUnderAmazing.module.css";

function ProductImagesUnderAmazing() {
  return (
    <div className={styles["container"]}>
      <Image
        width={320}
        height={220}
        className={styles["image-1"]}
        src={
          "https://dkstatics-public.digikala.com/digikala-adservice-banners/0759efe648d224a9e15891f242ee5b3fd77bae8f_1702103348.jpg?x-oss-process=image/quality,q_95/format,webp"
        }
      />
      <Image
        src={
          "https://dkstatics-public.digikala.com/digikala-adservice-banners/bc2a2ab35baf18247b0769cc08e1c4bde4fb3534_1702100787.jpg?x-oss-process=image/quality,q_95/format,webp"
        }
        width={320}
        height={220}
        className={styles["image-2"]}
      />
      <Image
        src={
          "https://dkstatics-public.digikala.com/digikala-adservice-banners/98595c5c87356705ff388ae9e785114670a35055_1701863725.jpg?x-oss-process=image/quality,q_95/format,webp"
        }
        width={320}
        height={220}
        className={styles["image-3"]}
      />
      <Image
        src={
          "https://dkstatics-public.digikala.com/digikala-adservice-banners/cbde2f4d9424b696a1987cc9d7f33675634568da_1701864906.jpg?x-oss-process=image/quality,q_95/format,webp"
        }
        width={320}
        height={220}
        className={styles["image-4"]}
      />
    </div>
  );
}

export default ProductImagesUnderAmazing;
