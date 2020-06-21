import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardProduct.module.scss'
import ImgWrapper from '../ImgWrapper'
import Button from '../Button'
import { moneyToLocaleString } from '../../utils/moneyToLocaleString'

const CardProduct = ({ imgUrl, id, title, author, price, onAddedToCart }) => (
  <div className={styles.card}>
    <ImgWrapper imgUrl={imgUrl} alt={title} />

    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      <span className={styles.author}>{author}</span>
      <span className={styles.price}>{moneyToLocaleString(price)}</span>
      <Button label="Add to Cart" onClick={() => onAddedToCart(id)} />
    </div>
  </div>
)

CardProduct.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

CardProduct.defaultProps = {
  // defaultProps here
}

export default CardProduct