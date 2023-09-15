import { createContext, useState } from 'react';

export const FollowingContext = createContext();

const FollowingContextProvider = ({ children }) => {
  const [followingProducts, setFollowingProducts] = useState([]);

  return (
    <FollowingContext.Provider
      value={{
        followingProducts,
        setFollowingProducts,
      }}
    >
      {children}
    </FollowingContext.Provider>
  );
};

export default FollowingContextProvider;
