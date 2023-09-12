import { useState } from "react";
import { Checkbox, Imade, Star } from "../../UI";

const index = () => {
  const [display, setDisplay] = useState("none");

  return (
    <div className="Product_info ">
      <div className="Product_info__top">
        <span>Smartphones,</span> <span>Telephones</span>
      </div>
      <h3>Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1" (Black)</h3>
      <div className="star">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </li>
        <li>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        </li>
        <li>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem
        </li>
      </ul>
      <p className="sku">
        {" "}
        SKU:<span> 29087645</span>
      </p>
      <p className="Brand">Brand</p>
      <Imade />
      <form>
        <label htmlFor="color">color</label>
        <ul>
          <li onClick={() => setDisplay("block")}>
            <Checkbox display={display} />
          </li>
          <li>
            <Checkbox display={display} />
          </li>
          <li className="">
            <Checkbox display={display} />
          </li>
          <li className="">
            <Checkbox display={display} />
          </li>
          <li className="">
            <Checkbox display={display} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default index;
