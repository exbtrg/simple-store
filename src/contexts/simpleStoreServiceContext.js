import React from 'react'

const simpleStoreServiceContext = React.createContext()

const {
  Provider: SimpleStoreServiceProvider,
  Consumer: SimpleStoreServiceConsumer
} = simpleStoreServiceContext

export {
  simpleStoreServiceContext,
  SimpleStoreServiceProvider,
  SimpleStoreServiceConsumer
}