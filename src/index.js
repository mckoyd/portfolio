import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Layout} from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import './styles/reset.css';
import './styles/index.css';



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>, 
  document.getElementById('root')
);

