import React from "react";
import styles from "./ShopByCategory.module.css";
import Image from "next/image";

const ShopByCategory = () => {
  return (
    <div className={styles["outer-container"]}>
      <h1 className={styles["header-title"]}>خرید بر اساس دسته بندی</h1>
      <div className={styles["container-Category"]}>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/510816e9ec4cbfad2edbff2763e2059a504e571b_1701193038.png"
            }
          />
          <h3>موبایل</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/ba175c709e3cc22e3fd7c65c7c6a21854d1c3765_1701193047.png"
            }
          />
          <h3>کالای دیجیتال</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png"
            }
          />
          <h3>خانه و آشپزخانه</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png"
            }
          />
          <h3>مد و پوشاک</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/5f3aa7bb8bde7c7433d31025d508ee3afd367773_1701193071.png"
            }
          />
          <h3>کالاهای سوپرمارکتی</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/f1ff29c0399fdbeef7cef44bf6ec897f31287449_1701193077.png"
            }
          />
          <h3>کتاب لوازم تحریر</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/dee082825fa27bf216cc8cf2153745062c29e62d_1701193085.png"
            }
          />
          <h3>اسباب بازی</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1701193097.png"
            }
          />
          <h3>زیبایی و سلامت</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/f64a3adf6e327bf1b85ce43449740d974eaaf037_1701193104.png"
            }
          />
          <h3>ورزش و سفر</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/5421d413c4f0a943cdc1cca473eb15536b13c98f_1701193112.png"
            }
          />
          <h3>ابزار آلات و تجهیزات</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/ac63c44ab551dc24421aea53b92686a2f72906ff_1701193119.png"
            }
          />
          <h3>خودرو و موتورسیکلت</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/c48ab9fc81e7732a617f90eca608b943d4616ff7_1701193126.png"
            }
          />
          <h3>محصولات بومی و محلی</h3>
        </div>
        <div className={styles["Section"]}>
          <Image
            width={100}
            height={100}
            src={
              "https://dkstatics-public.digikala.com/digikala-categories/a25821d184d092f05383e6039738d2cad25bcbb7_1701193134.png"
            }
          />
          <h3>کارت هدیه</h3>
        </div>
      </div>
      <div className={styles["pair-photo"]}>
            <Image width={664} height={264} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/cc09d655334c308bc42009f8020645b88c589472_1701864382.jpg?x-oss-process=image/quality,q_95/format,webp"} />
            <Image width={664} height={264} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/0f30f3e2d05e39c3f50ff08ccdad75849d2ee10c_1701864623.jpg?x-oss-process=image/quality,q_95/format,webp"}/>
       </div>
    </div>
  );
};

export default ShopByCategory;
