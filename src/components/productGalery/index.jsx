import React from "react";
import { useNavigate } from "react-router-dom";
import { Cart1 } from "../../assets/images/svg";
import {
  Iphone1,
  Iphone2,
  Iphone3,
  Iphone4,
  Iphone5,
  Iphone6,
} from "../../assets/images/jpg";

const index = () => {
  const navigate = useNavigate();
  return (
    <div className="Product_gallery">
      <img src={Cart1} alt="cart1" className="SearchIcon" />
      <img
        alt=""
        src={Iphone1}
        className="imgIphone_14"
        onClick={() => navigate("/products/:id/1")}
      />
      <div>
        <img src={Iphone2} alt="" />
        <img src={Iphone3} alt="" />
        <img src={Iphone4} alt="" />
        <img src={Iphone5} alt="" />
      </div>
    </div>
  );
};

export default index;
