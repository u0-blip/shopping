import React, { Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import Details from './Details/Details';
import Cart from './Cart/Cart';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProduct, ContextShopping } from './centralized_context';


function App() {
  Axios.defaults.baseURL = 'http://localhost:3001';

  return (

    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <ContextProduct>
            <Route exact path='/' component={Home} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/cart' component={Cart} />
          </ContextProduct>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
