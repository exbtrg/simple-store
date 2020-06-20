import React from 'react'
import { connect } from 'react-redux'
import { addedBooksToCart, removeBookFromCart, removeAllBooksFromCart } from '../../actions'
import Cart from './Cart'

const CartContainer = (props) => <Cart {...props} />

const mapStateToProps = ({ shopingCart: { cartItems, orderTotal } }) => ({ cartItems, orderTotal })

const mapDispatchToProps = {
  onIncrease: addedBooksToCart,
  onDecrease: removeBookFromCart,
  onDelete: removeAllBooksFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)