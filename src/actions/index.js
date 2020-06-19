import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  addedBooksToCart
} from './actionTypes'

const booksRequested = () => ({
  type: fetchBooksRequest
})

const booksLoaded = (newBooks) => ({
  type: fetchBooksSuccess,
  payload: newBooks
})

const requestError = (error) => ({
  type: fetchBooksFailure,
  payload: error
})

const fetchBooks = (dispatch, simpleStoreService) => () => {
  dispatch(booksRequested())
  simpleStoreService
    .getBooks()
    .then(data => {
      dispatch(booksLoaded(data))
    })
    .catch(err => {
      dispatch(requestError(err))
    })
}

const addBooksToCard = (id) => ({
  type: addedBooksToCart,
  payload: id
})

export {
  fetchBooks,
  addBooksToCard
}