import React, { useEffect } from 'react'
import { array, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from '../../utils/compose'
import { fetchBooks } from '../../actions'
import withSimpleStoreService from '../../HOC/withSimpleStoreService'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'
import ProductList from './ProductList'

const ProductListContainer = ({
  books,
  loading,
  error,
  fetchBooks
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

  return <ProductList books={books} />
}

ProductListContainer.propTypes = {
  books: array,
  loading: bool,
  fetchBooks: func
}

const mapStateToProps = (props) => (props)

const mapDispatchToProps = (dispatch, { simpleStoreService }) => ({
  fetchBooks: fetchBooks(dispatch, simpleStoreService)
})

export default compose(
  withSimpleStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer)