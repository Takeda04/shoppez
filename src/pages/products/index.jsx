import { AddToCart, ProductGallery, ProductInfo } from "../../components";

const index = () => {
  return (
    <>
      <div className="container product">
        <ProductGallery />
        <ProductInfo />
        <AddToCart />
      </div>
    </>
  );
};

export default index;
