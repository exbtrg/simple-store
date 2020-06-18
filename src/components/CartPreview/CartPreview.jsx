import React from 'react'
import PropTypes from 'prop-types'
import styles from './CartPreview.module.scss'
import { ReactComponent as CartIcon } from './cart.svg'

const CartPreview = () => (
  <div className={styles.cart}>
    <CartIcon />
    <p>5 items ($200)</p>
  </div>
)

CartPreview.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

CartPreview.defaultProps = {
  // defaultProps here
}

export default CartPreview