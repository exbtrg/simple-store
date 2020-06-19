import React from 'react'
import { string, func } from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ label, type, onClick }) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
)

Button.propTypes = {
  label: string,
  type: string,
  callBack: func
}

Button.defaultProps = {
  type: 'button',
  callBack: () => { }
}

export default Button