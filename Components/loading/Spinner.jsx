import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles['kossher-maybe']}>
    <BounceLoader/>
    </div>
  )
}

export default Spinner