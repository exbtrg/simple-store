import React from 'react'
import PropTypes from 'prop-types'
import styles from './ErrorIndicator.module.scss'

const ErrorIndicator = () => (
  <div className={styles.error}>
    <p>Ooops...</p>
    <p>Server is not available</p>
  </div>
)

ErrorIndicator.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

ErrorIndicator.defaultProps = {
  // defaultProps here
}

export default ErrorIndicator