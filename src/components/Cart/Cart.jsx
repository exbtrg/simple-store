import React from 'react'
import { array, number, func } from 'prop-types'
import styles from './Cart.module.scss'
import CartItem from './CartItem'
import Button from '../Button'

const Cart = ({ cartItems, orderTotal, onIncrease, onDecrease, onDelete }) => (
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

    <div className={styles.total}>Total: {orderTotal}</div>

    <Button label="Checkout" />
  </div>
)

Cart.propTypes = {
  cartItems: array,
  total: number,
  onIncrease: func,
  onDecrease: func,
  onDelete: func
}

export default Cart