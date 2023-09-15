import 'swiper/css';
import React from 'react';
import App from './App.jsx';
import 'swiper/css/pagination';
import { store } from './store';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import FavoriteContextProvider from './contexts/favourite.jsx';
import ProductsContextProvider from './contexts/products.jsx';
import SearchedProductsContextProvider from './contexts/search.jsx';
import FollowingContextProvider from './contexts/mycart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FavoriteContextProvider>
      <ProductsContextProvider>
        <SearchedProductsContextProvider>
          <FollowingContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </FollowingContextProvider>
        </SearchedProductsContextProvider>
      </ProductsContextProvider>
    </FavoriteContextProvider>
  </>
);
