import actionTypes from '../actions/actionTypes'

const updateCartItems = (cartItems, item, idx) => {
  if (item.totalPrice === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx < 0) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
}

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    totalPrice = 0,
    countItems = 0
  } = item

  return {
    id,
    title,
    countItems: countItems + quantity,
    totalPrice: totalPrice + (quantity * book.price)
  }
}

const updateAmountCalc = (arr, key) => {
  return arr.reduce((acc, item) => (
    acc + item[key]
  ), 0)
}

const updateItems = (state, bookId, quantity) => {
  const { bookList: { books }, shopingCart: { cartItems } } = state

  const currentBook = books.find(({ id }) => bookId === id)
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
  const item = cartItems[itemIndex]

  const newItem = updateCartItem(currentBook, item, quantity)
  const newItems = updateCartItems(cartItems, newItem, itemIndex)

  return {
    cartItems: newItems,
    orderTotal: updateAmountCalc(newItems, 'totalPrice'),
    quantityInOrder: updateAmountCalc(newItems, 'countItems')
  }
}

const updateShopingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      quantityInOrder: 0
    }
  }

  switch (action.type) {
    case actionTypes.addedBooksToCart:
      return updateItems(state, action.payload, 1)

    case actionTypes.removeBookFromCart:
      return updateItems(state, action.payload, -1)

    case actionTypes.removeAllBooksFromCart:
      const item = state.shopingCart.cartItems.find(({ id }) => id === action.payload)
      return updateItems(state, action.payload, -item.countItems)

    default:
      return state.shopingCart
  }
}

export default updateShopingCart