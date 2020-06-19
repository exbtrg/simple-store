import React from 'react'
import { array } from 'prop-types'
import styles from './ProductList.module.scss'
import CardProduct from '../CardProduct'

const ProductList = ({ books }) => {
  return (
    <div className={styles.products}>
      {books.map((itemData) => (
        <CardProduct key={itemData.id} {...itemData} />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  books: array
}

export default ProductList