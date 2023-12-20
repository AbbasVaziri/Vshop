import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './CustomPagination.module.css'

const CustomPagination = () => {
    return (
        <>
        <div className={styles['outer-container']}>
          <IoIosArrowBack className={styles['prev-page']}/>
          <span className={styles['active']}>1</span>
          <span>2</span>
          <span>3</span>
          <IoIosArrowForward className={styles['next-page']}/>
        </div>
        </>
  )
}

export default CustomPagination