import React from 'react'
import { string, func } from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ label, type, callBack }) => (
  <button
    className={styles.button}
    type={type}
    onClick={callBack}
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