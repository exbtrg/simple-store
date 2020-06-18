import React from 'react'
import { oneOf, string } from 'prop-types'
import style from './Spinner.module.scss'
import ErrorIndicator from '../ErrorIndicator'

const Spinner = ({ error }) => {

  if (error) {
    return <ErrorIndicator />
  }

  return (
    <div className={style.spinner} />
  )
}

Spinner.propTypes = {
  error: oneOf([null, string])
}

export default Spinner