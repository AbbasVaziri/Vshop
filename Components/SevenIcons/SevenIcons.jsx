import Image from 'next/image'
import Link from 'next/link'
import styles from './SevenIcons.module.css'

const SevenIcons = ({ products }) => {

  return (
    <div className={styles['outer-container']}>
      {products.map((item) => {
        return (
          <Link href={`/Products/category/${item.url}`}>
            <div className={styles['item-container']}>
              <Image src={`/images/${item.iconName}`} height={50} width={50} />
              <label className={styles['label-container']}>{item.label}</label>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SevenIcons
