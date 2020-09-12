import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList/ProductList';
import Details from './Details/Details';
import Cart from './Cart/Cart';


function App() {
  return (
    <Fragment>
      <Navbar>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route exact path='/details' component={Details}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      </Navbar>
    </Fragment>
  );
}

export default App;
