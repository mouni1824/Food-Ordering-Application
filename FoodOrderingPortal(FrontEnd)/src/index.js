import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import { Provider } from 'react-redux';
import store from './Components/store';
import Restaurants from './Components/Restaurants';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


