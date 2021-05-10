import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'

import { fetchProducts } from './_reducers/productsSlice'

import './_styles/style.scss'


//Fetch the list of products for app to display
store.dispatch(fetchProducts())

const persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <App />
        </BrowserRouter>,
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);