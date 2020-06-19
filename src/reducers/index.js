import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  addedBooksToCart
} from '../actions/actionTypes'

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: 'Web Development with Node and Express',
      totalPrice: 150,
      countItems: 3
    },
    {
      id: 2,
      title: 'Node and Express',
      totalPrice: 70,
      countItems: 2
    }
  ],
  orderTotal: 300
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchBooksRequest:
      return {
        ...state,
        books: [],
        loading: true
      }

    case fetchBooksSuccess:
      return {
        ...state,
        books: action.payload,
        loading: false
      }

    case fetchBooksFailure:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }

    case addedBooksToCart:
      const bookId = action.payload
      const currentBook = state.books.find(({ id }) => bookId === id)
      const newItem = {
        id: bookId,
        title: currentBook.title,
        totalPrice: currentBook.price,
        countItems: 1
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ]
      }

    default:
      return state
  }
}

export default reducer