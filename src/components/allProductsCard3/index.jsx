import React, { memo, useContext, useState } from 'react';
import { praducts } from '../../jsonData';
import { FavoriteContext } from '../../contexts/favourite';
import { FaHeart } from 'react-icons/fa';
import { ProductsContext } from '../../contexts/products';
import { SearchedProducts } from '../../contexts/search';

const Index = memo(() => {
  const [buttonClasses, setButtonClasses] = useState(Array(praducts.length).fill(false)); // Use an array to track the state for each card
  const { setFavouriteProducts } = useContext(FavoriteContext);
  const { searchedProducts, setSearchedProducts } = useContext(SearchedProducts);
  const { products } = useContext(ProductsContext);
  const handleButtonClick = idx => {
    const newButtonClasses = [...buttonClasses];
    newButtonClasses[idx] = !newButtonClasses[idx];
    setButtonClasses(newButtonClasses);
  };

  const handleLiked = () => {
    const arr = products.filter(likedProduct => likedProduct.isLiked == true);
    setFavouriteProducts(arr);
  };

  console.log(searchedProducts);
  return (
    <>
      {(searchedProducts.length ? searchedProducts : products).map((product, idx) => (
        <div className={`products ${buttonClasses[idx] ? 'active' : ''}`} key={idx}>
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
            <button
              className={`products_wrapper__btn1 ${product.isLiked ? 'active-liked' : ''}`}
              onClick={() => {
                product.isLiked = !product.isLiked;
                handleLiked();
              }}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      ))}
    </>
  );
});

export default Index;
