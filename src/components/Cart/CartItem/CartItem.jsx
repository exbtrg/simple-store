import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './CartItem.module.scss'
import { ReactComponent as MinusIcon } from './minus.svg'
import { ReactComponent as PlusIcon } from './plus.svg'
import { ReactComponent as TrashIcon } from './trash.svg'

const CartItem = ({ title, price, index }) => (
  <tr className={styles.item}>
    <td>{index}</td>

    <td className={styles.adaptive}>{title}</td>

    <td>2</td>

    <td>{price}</td>

    <td className={styles.action}>
      <button className={cn(styles.button, styles.minus)}>
        <MinusIcon />
      </button>

      <button className={cn(styles.button, styles.plus)}>
        <PlusIcon />
      </button>

      <button className={cn(styles.button, styles.trash)}>
        <TrashIcon />
      </button>
    </td>
  </tr>
)

CartItem.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

CartItem.defaultProps = {
  // defaultProps here
}

export default CartItem