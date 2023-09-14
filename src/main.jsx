import 'swiper/css';
import React from 'react';
import App from './App.jsx';
import 'swiper/css/pagination';
import { store } from './store';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import FavoriteContextProvider from './contexts/favourite.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FavoriteContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FavoriteContextProvider>
  </>
);
