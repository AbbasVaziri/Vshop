import React from 'react'
import styles from './notFound.module.css'

const notfound = () => {
  return (
    <>
      <div className={styles['outer-container']}>
        <h1 className={styles['title-notFound']}>
          !صفحه‌ای که دنبال آن بودید پیدا نشد
        </h1>
        <img
          src="https://www.digikala.com/statics/img/png/page-not-found.webp"
          width={600}
          alt=""
        />
      </div>
    </>
  )
}

export default notfound