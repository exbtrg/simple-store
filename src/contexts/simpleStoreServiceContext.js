import React from 'react'

const simpleStoreServiceContext = React.createContext()

const { Provider: SimpleStoreServiceProvider } = simpleStoreServiceContext

export {
  simpleStoreServiceContext,
  SimpleStoreServiceProvider
}