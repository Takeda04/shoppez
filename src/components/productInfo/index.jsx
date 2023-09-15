import { useContext, useState } from 'react';
import { Checkbox, Imade, Star } from '../../UI';
import { ProductsContext } from '../../contexts/products';
import { useParams } from 'react-router-dom';

const index = () => {
  const [display, setDisplay] = useState('none');
  const params = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(product => product.id == params.id);

  return (
    <div className='Product_info '>
      <div className='Product_info__top'>
        <span>{product.title}</span>
      </div>
      <h3>{product.description} (Black)</h3>
      <div className='star'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <span>4.5</span>
        <span>(200)</span>
      </div>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </li>
        <li>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae
        </li>
        <li>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        </li>
      </ul>
      <p className='sku'>
        {' '}
        SKU:<span> 29087645</span>
      </p>
      <p className='Brand'>Brand</p>
      <Imade />
      <form>
        <label htmlFor='color'>color</label>
        <ul>
          <li onClick={() => setDisplay('block')}>
            <Checkbox display={display} />
          </li>
          <li>
            <Checkbox display={display} />
          </li>
          <li className=''>
            <Checkbox display={display} />
          </li>
          <li className=''>
            <Checkbox display={display} />
          </li>
          <li className=''>
            <Checkbox display={display} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default index;
