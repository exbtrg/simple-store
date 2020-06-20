import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './CartItem.module.scss'
import { ReactComponent as MinusIcon } from './minus.svg'
import { ReactComponent as PlusIcon } from './plus.svg'
import { ReactComponent as TrashIcon } from './trash.svg'

const CartItem = ({
  id,
  title,
  totalPrice,
  countItems,
  index,
  onIncrease,
  onDecrease,
  onDelete
}) => (
    <tr className={styles.item}>
      {console.log(totalPrice, countItems)}

      <td>{index}</td>

      <td className={styles.adaptive}>{title}</td>

      <td>{countItems}</td>

      <td>{totalPrice}</td>

      <td className={styles.action}>
        <button
          className={cn(styles.button, styles.minus)}
          onClick={() => onDecrease(id)}
        >
          <MinusIcon />
        </button>

        <button
          className={cn(styles.button, styles.plus)}
          onClick={() => onIncrease(id)}
        >
          <PlusIcon />
        </button>

        <button
          className={cn(styles.button, styles.trash)}
          onClick={() => onDelete(id)}
        >
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