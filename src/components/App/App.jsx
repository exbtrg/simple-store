import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'
import Header from '../Header'
import ProductList from '../ProductList'
import Cart from '../Cart'


const App = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <Switch>
        <Route path="/" component={ProductList} exact />

        <Route path="/cart" component={Cart} />
      </Switch>
    </main>
  )
}

export default App