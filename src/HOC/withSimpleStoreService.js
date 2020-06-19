import React from 'react'
import { SimpleStoreServiceConsumer } from '../contexts/simpleStoreServiceContext'

const withSimpleStoreService = () => (Wrapped) => {
  return (props) => (
    <SimpleStoreServiceConsumer>
      {
        (simpleStoreService) => (
          <Wrapped simpleStoreService={simpleStoreService} {...props} />
        )
      }
    </SimpleStoreServiceConsumer>
  )
}

export default withSimpleStoreService