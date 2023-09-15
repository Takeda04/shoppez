import React, { useContext } from 'react';
import { FollowingContext } from '../../contexts/mycart';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FavoriteContext } from '../../contexts/favourite';
import { ProductsContext } from '../../contexts/products';

const index = () => {
  const { setFavouriteProducts } = useContext(FavoriteContext);
  const { products } = useContext(ProductsContext);
  const { followingProducts, setFollowingProducts } = useContext(FollowingContext);

  const handleButtonClick = id => {
    setFollowingProducts(followingProducts.filter(product => product.id != id || product.buttonClasses != false));
  };

  const handleLiked = () => {
    const arr = followingProducts.filter(likedProduct => likedProduct.isLiked == true);
    setFavouriteProducts(arr);
  };

  return (
    <div className='my-cart container'>
      {followingProducts?.map((product, idx) => (
        <div className={`products ${product.buttonClasses ? 'active' : ''}`} key={idx}>
          <Link to={'/products/' + product.id}>
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
                product.buttonClasses = false;
                handleButtonClick(product.id);
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
    </div>
  );
};

export default index;
