import React, { memo, useContext, useState } from 'react';
import { praducts } from '../../jsonData';
import { FavoriteContext } from '../../contexts/favourite';
import { FaHeart } from 'react-icons/fa';
import { ProductsContext } from '../../contexts/products';
import { SearchedProducts } from '../../contexts/search';
import { Link } from 'react-router-dom';
import { FollowingContext } from '../../contexts/mycart';

const Index = memo(() => {
  const { setFavouriteProducts } = useContext(FavoriteContext);
  const { products } = useContext(ProductsContext);
  const { setFollowingProducts, followingProducts } = useContext(FollowingContext);

  const handleButtonClick = prdct => {
    console.log(prdct);
    setFollowingProducts(
      prdct.buttonClasses ? [...followingProducts, prdct] : followingProducts.filter(p => p.id != prdct.id)
    );
  };

  const handleLiked = () => {
    const arr = products.filter(likedProduct => likedProduct.isLiked == true);
    setFavouriteProducts(arr);
  };

  return (
    <>
      {products.map((product, idx) => (
        <div className={`products ${product.buttonClasses ? 'active' : ''}`} key={idx}>
          <Link to={'products/' + product.id}>
            <p className='products_title'>{product.title}</p>
            <p className='products_disc'>{product.description}</p>
            <img src={product.img} alt='product_img' className='product_img' />
          </Link>
          <div className='products_wrapper'>
            <div className='big_wrapper'>
              <span className='big_price_new'>{product.new_price}</span>
              <span className='big_price_old'>{product.old_price}</span>
            </div>
            <button
              className={`products_wrapper__btn1 ${product.buttonClasses ? 'products_wrapper__btn2' : ''}`}
              onClick={() => {
                product.buttonClasses = !product.buttonClasses;
                handleButtonClick(product);
              }}
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
