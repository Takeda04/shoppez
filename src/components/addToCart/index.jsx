import { useState } from "react";
import { Button } from "../../UI";
import { Cart2, Cart3, Cart4 } from "../../assets/images/svg";

const index = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="Price_and_add_to_cart">
      <div className="price__top">
        <h5 className="Delivery">Delivery:</h5>
        <h5 className="Free">Free</h5>
      </div>
      <div className="price__botton">
        <h5 className="Delivery">Stock:</h5>
        <h5 className="Free_26">26</h5>
      </div>
      <div className="bottonCard">
        <Button type="button" className="Compare">
          <>
            <h6>Compare</h6>
            <img src={Cart3} alt="compare" />
          </>
        </Button>
        <Button type="button" className="wishlist">
          <>
            <h6>Wishlist</h6>
            <img src={Cart4} alt="cart4" />
          </>
        </Button>
      </div>
      <h1 className="narx">${`${120000 * count}`}</h1>
      <div className="bottonCard">
        <Button
          type="button"
          className="decriment"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          type="button"
          className="increment"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </div>
      <Button className="add__to-cart" type="button">
        <>
          <span>Add to cart</span>
          <img src={Cart2} alt="cart2" />
        </>
      </Button>
    </div>
  );
};

export default index;
