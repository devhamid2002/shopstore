import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Camponents/Breadcrums/Breadcrums";
import ProductDisplay from "../Camponents/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Camponents/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Camponents/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
