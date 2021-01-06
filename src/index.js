import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from 'redux'

import manageUsers from './reducers/manageUsers'


const store = createStore(manageUsers)


ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
 
  // add imports and code
  ,
  document.getElementById('root')
);
