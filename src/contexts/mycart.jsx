import { createContext, useState } from 'react';

export const FollowingContext = createContext();

const FollowingContextProvider = ({ children }) => {
  const [followingProducts, setFollowingProducts] = useState([]);
  const [followingPrice, setFollowingPrice] = useState(0);

  return (
    <FollowingContext.Provider
      value={{
        followingProducts,
        setFollowingProducts,
        followingPrice,
        setFollowingPrice,
      }}
    >
      {children}
    </FollowingContext.Provider>
  );
};

export default FollowingContextProvider;
