import React, { Fragment } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home/Home';
import Details from './Details/Details';
import Cart from './Cart/Cart';
import Axios from 'axios';
import { ContextProvider } from './centralized_context';


function App() {
  Axios.defaults.baseURL = 'http://localhost:3001';

  return (

    <ContextProvider>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Router>
      </Fragment>
    </ContextProvider>
  );
}

export default App;
