import React, { Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import Details from './Details/Details';
import Cart from './Cart/Cart';
import Axios from 'axios';
import { ContextProduct } from './centralized_context';
import NoFound from './404';


function App() {
  Axios.defaults.baseURL = 'http://shopping.peterelectreng.com';
  console.log(Axios.defaults.baseURL)

  return (

    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <ContextProduct>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route path='/products/:id' component={Details} />
          </ContextProduct>
          <Route path="/404" component={NoFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
