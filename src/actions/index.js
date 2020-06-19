const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST'
})

const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks
})

const requestError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
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

export {
  fetchBooks
}