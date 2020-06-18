import React, { useContext, useEffect } from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import { booksLoaded } from '../../actions'
import styles from './ProductList.module.scss'
import CardProduct from '../CardProduct'
import { simpleStoreServiceContext } from '../../contexts/simpleStoreServiceContext'

const ProductList = ({ books, booksLoaded }) => {
  const simpleStoreService = useContext(simpleStoreServiceContext)

  useEffect(() => {
    const data = simpleStoreService.getBooks()
    booksLoaded(data)
  }, [booksLoaded, simpleStoreService])

  return (
    <div className={styles.products}>
      {books.map((itemData) => (
        <CardProduct key={itemData.imgUrl} {...itemData} />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  books: array
}

const mapStateToProps = ({ books }) => ({ books })
const mapDispatchToProps = { booksLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)