import React from 'react'
import Card from '../ShoppingCard/Card'
import styles from './SearchResult.module.css'

const SearchResult = ({ searchResults }) => {
  return (
    <div className={styles['container-result']}>
      {searchResults.map((result) => {
        return <Card product={result} />
      })} 
    </div>
  )
}

export default SearchResult