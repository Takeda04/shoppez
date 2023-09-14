import React, { memo, useContext, useEffect, useState } from 'react';
import { praducts } from '../../jsonData';
import { FavoriteContext } from '../../contexts/favourite';

const Index = memo(() => {
  const [buttonClasses, setButtonClasses] = useState(Array(praducts.length).fill(false)); // Use an array to track the state for each card
  const { favouriteProducts, setFavouriteProducts } = useContext(FavoriteContext);
  const handleButtonClick = idx => {
    // Toggle the state of the clicked card
    const newButtonClasses = [...buttonClasses];
    newButtonClasses[idx] = !newButtonClasses[idx];
    setButtonClasses(newButtonClasses);
  };
  const handleLiked = () => {
    const arr = praducts.filter(likedProduct => likedProduct.isLiked == true);
    setFavouriteProducts(arr);
  };
  return (
    <>
      {praducts.map((product, idx) => (
        <div
          className={`products ${buttonClasses[idx] ? 'active' : ''}`}
          key={idx}
          onClick={() => {
            product.isLiked = !product.isLiked;
            handleLiked(idx);
          }}
        >
          <p className='products_title'>{product.title}</p>
          <p className='products_disc'>{product.description}</p>
          <img src={product.img} alt='product_img' className='product_img' />
          <div className='products_wrapper'>
            <div className='big_wrapper'>
              <span className='big_price_new'>{product.new_price}</span>
              <span className='big_price_old'>{product.old_price}</span>
            </div>
            <button
              className={`products_wrapper__btn1 ${buttonClasses[idx] ? 'products_wrapper__btn2' : ''}`}
              onClick={() => handleButtonClick(idx)} // Pass the card index to the click handler
            >
              <img src={product.icon} alt='icon' className='products_wrapper__btn-icon' />
            </button>
          </div>
        </div>
      ))}
    </>
  );
});

export default Index;
