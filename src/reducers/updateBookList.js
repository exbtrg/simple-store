import actionTypes from '../actions/actionTypes'

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    }
  }

  switch (action.type) {
    case actionTypes.fetchBooksRequest:
      return {
        ...state.bookList,
        books: [],
        loading: true
      }

    case actionTypes.fetchBooksSuccess:
      return {
        ...state.bookList,
        books: action.payload,
        loading: false
      }

    case actionTypes.fetchBooksFailure:
      return {
        books: [],
        loading: false,
        error: action.payload
      }

    default:
      return state.bookList
  }
}

export default updateBookList