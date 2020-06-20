import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Cart.module.scss'
import { addedBooksToCart, removeBookFromCart, removeAllBooksFromCart } from '../../actions'
import CartItem from './CartItem'
import Button from '../Button'

const Cart = ({ cartItems, total, onIncrease, onDecrease, onDelete }) => (
  <div className={styles.cart}>
    <h2 className={styles.title}>You Order</h2>

    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {cartItems.map((itemData, index) => (
          <CartItem
            key={itemData.id}
            index={index + 1}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
            {...itemData}
          />
        ))}
      </tbody>
    </table>

    <div className={styles.total}>Total: {total}</div>

    <Button label="Checkout" />
  </div>
)

Cart.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

Cart.defaultProps = {
  // defaultProps here
}

const mapStateToProps = ({ shopingCart: { cartItems, orderTotal } }) => ({ cartItems, orderTotal })

const mapDispatchToProps = {
  onIncrease: addedBooksToCart,
  onDecrease: removeBookFromCart,
  onDelete: removeAllBooksFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)