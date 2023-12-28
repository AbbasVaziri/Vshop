import React from 'react'
import styles from './Spinner.module.css'
import {FadeLoader} from "react-spinners";


const Spinner = () => {
  return (
    <div className={styles['container-spinner']}>
    <FadeLoader/>
    </div>
  )
}

export default Spinner