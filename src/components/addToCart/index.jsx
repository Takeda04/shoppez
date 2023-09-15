import { useContext, useState } from 'react';
import { Button } from '../../UI';
import { Cart2, Cart3, Cart4 } from '../../assets/images/svg';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products';
import { FavoriteContext } from '../../contexts/favourite';

const index = () => {
  const [count, setCount] = useState(1);
  const params = useParams();
  const { setFavouriteProducts } = useContext(FavoriteContext);
  const { products } = useContext(ProductsContext);
  const product = products.find(product => product.id == params.id);
  const price = product.new_price.slice(1).replace(/\./i, '');
  return (
    <div className='Price_and_add_to_cart'>
      <div className='price__top'>
        <h5 className='Delivery'>Delivery:</h5>
        <h5 className='Free'>Free</h5>
      </div>
      <div className='price__botton'>
        <h5 className='Delivery'>Stock:</h5>
        <h5 className='Free_26'>26</h5>
      </div>
      <div className='bottonCard'>
        <Button type='button' className='Compare'>
          <>
            <h6>Compare</h6>
            <img src={Cart3} alt='compare' />
          </>
        </Button>
        <Button
          type='button'
          className='wishlist'
          onClick={() => {
            product.isLiked = !product.isLiked;
            const arr = products.filter(likedProduct => likedProduct.isLiked == true);
            setFavouriteProducts(arr);
          }}
        >
          <>
            <h6>Wishlist</h6>
            <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M3.01456 3.17252C1.60615 4.58093 1.60615 6.86443 3.01456 8.27285L8.62492 13.8832L14.2353 8.27285C15.6437 6.86443 15.6437 4.58093 14.2353 3.17252C12.8269 1.76411 10.5434 1.76411 9.13495 3.17252L8.62492 3.68255L8.11489 3.17252C6.70648 1.76411 4.42297 1.76411 3.01456 3.17252Z'
                fill={product.isLiked ? 'red' : '#586A84'}
              />
            </svg>
          </>
        </Button>
      </div>
      <h1 className='narx'>${`${price * count}`}</h1>
      <div className='bottonCard'>
        <Button type='button' className='decriment' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          -
        </Button>
        <span>{count}</span>
        <Button type='button' className='increment' onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <Button className='add__to-cart' type='button'>
        <>
          <span>Add to cart</span>
          <img src={Cart2} alt='cart2' />
        </>
      </Button>
    </div>
  );
};

export default index;
