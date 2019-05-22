import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// good for development purposes, keeps the page from refreshing, which means that as we develop cthe code it wont reset the state
if (module.hot) {
  module.hot.accept();
}
