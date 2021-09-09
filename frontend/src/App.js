import React, { Component } from 'react'
import ProductList from './Components/products/ProductList';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import New from './Components/Pages/New';
import Show from './Components/Pages/Show'
import Edit from './Components/Pages/Edit'
import Layout from './Components/layout/Layout'
import Home from './Components/Pages/Home'
export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/new" component={New} />
            <Route exact path="/products/:id" component={Show} />
            <Route exact path="/products/:id/edit" component={Edit} />

          </Switch>

        </Layout>
      </div>
    )
  }
}
