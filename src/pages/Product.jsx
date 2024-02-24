import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Camponents/Breadcrums/Breadcrums";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));
  return (
    <div>
      <Breadcrums product={product} />
    </div>
  );
}

export default Product;
