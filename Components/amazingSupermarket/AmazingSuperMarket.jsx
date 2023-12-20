import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import styles from './AmazingSuperMarket.module.css'
import Image from 'next/image'

const AmazingSuperMarket = () => {
  return (
  <div className={styles['outer-container']}>
      <div className={styles['right-container']}>
        <div className={styles['container']}>
        <img src="https://www.digikala.com/statics/img/png/amazing/fresh.webp" alt="" />
        <img src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="" />
        <h1>تا 45% تخفیف</h1>
        </div>
      </div>      
      <div className={styles['left-container']}>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/c9b3a09f3409f83e5519cd47cd4a6d984f8d4c49_1607773462.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/2d135237c305d179745593852ae1b8ab9fd8bb42_1678710700.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/3572197.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/ef95c76548f6b95aaf4ca5521b8c1428f9a059f4_1694598965.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/3064409.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['container-circle']}>
            <Image width={60} height={60} src="https://dkstatics-public.digikala.com/digikala-products/111470718.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" className={styles['product-image']} alt="" />
          </div>
          <div className={styles['more-product']}>
            <h1>بیش از 90 کالا</h1>
            <FaArrowLeft/>
          </div>
      </div>  
      </div>
  )
}

export default AmazingSuperMarket