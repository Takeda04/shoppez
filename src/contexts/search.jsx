import { createContext, useState } from 'react';

export const SearchedProducts = createContext();

const SearchedProductsContextProvider = ({ children }) => {
  const [searchedProducts, setSearchedProducts] = useState([]);

  return (
    <SearchedProducts.Provider
      value={{
        searchedProducts,
        setSearchedProducts,
      }}
    >
      {children}
    </SearchedProducts.Provider>
  );
};

export default SearchedProductsContextProvider;
