import React from 'react'
import PropTypes from 'prop-types'
import styles from './Cart.module.scss'
import CartItem from '../CartItem'
import Button from '../Button'

const items = [
  {
    title: 'Web Development with Node and Express',
    price: '$34'
  },
  {
    title: 'Pro Express.js',
    price: '$97'
  }
]

const Cart = () => (
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
        {items.map((itemData, index) => (
          <CartItem key={itemData.title} index={index + 1} {...itemData} />
        ))}
      </tbody>
    </table>

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

export default Cart