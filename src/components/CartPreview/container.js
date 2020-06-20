import React from 'react'
import { connect } from 'react-redux'
import CartPreview from './CartPreview'

const CartPreviewContainer = (props) => <CartPreview {...props} />

const mapStateToProps = ({ shopingCart: { orderTotal, quantityInOrder } }) => ({ orderTotal, quantityInOrder })

export default connect(mapStateToProps)(CartPreviewContainer)