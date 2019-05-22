import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {Switch, Route} from 'react-router-dom';
import Weather from './views/weather';
import Racer from './views/racer';
import Cart from './views/cart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Weather />} />
            <Route exact path='/index' render={() => <Weather />} />
            <Route exact path='/racer' render={() => <Racer />} />
            <Route exact path='/cart' render={() => <Cart />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
