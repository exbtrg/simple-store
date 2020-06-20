import actionTypes from './actionTypes'

const fetchBooksRequest = () => ({
  type: actionTypes.fetchBooksRequest
})

const fetchBooksSuccess = (newBooks) => ({
  type: actionTypes.fetchBooksSuccess,
  payload: newBooks
})

const fetchBooksFailure = (error) => ({
  type: actionTypes.fetchBooksFailure,
  payload: error
})

const fetchBooks = (dispatch, simpleStoreService) => () => {
  dispatch(fetchBooksRequest())
  simpleStoreService
    .getBooks()
    .then(data => {
      dispatch(fetchBooksSuccess(data))
    })
    .catch(err => {
      dispatch(fetchBooksFailure(err))
    })
}

const addedBooksToCart = (id) => ({
  type: actionTypes.addedBooksToCart,
  payload: id
})

const removeBookFromCart = (id) => ({
  type: actionTypes.removeBookFromCart,
  payload: id
})

const removeAllBooksFromCart = (id) => ({
  type: actionTypes.removeAllBooksFromCart,
  payload: id
})

export {
  fetchBooks,
  addedBooksToCart,
  removeBookFromCart,
  removeAllBooksFromCart
}