import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import CartPreview from '../CartPreview'

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <h1>Simple Store</h1>
    </Link>

    <Link to="/cart">
      <CartPreview />
    </Link>
  </header>
)

export default Header