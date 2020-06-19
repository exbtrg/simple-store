import React, { useEffect } from 'react'
import { array, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from '../../utils/compose'
import { fetchBooks, addBooksToCard } from '../../actions'
import withSimpleStoreService from '../../HOC/withSimpleStoreService'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import ProductList from './ProductList'

const ProductListContainer = ({
  books,
  loading,
  error,
  fetchBooks,
  onAddedToCart
}) => {

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <ProductList books={books} onAddedToCart={onAddedToCart} />
}

ProductListContainer.propTypes = {
  books: array,
  loading: bool,
  fetchBooks: func
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error })

const mapDispatchToProps = (dispatch, { simpleStoreService }) => ({
  fetchBooks: fetchBooks(dispatch, simpleStoreService),
  onAddedToCart: (id) => dispatch(addBooksToCard(id))
})

export default compose(
  withSimpleStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer)