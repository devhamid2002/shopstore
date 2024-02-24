import React from "react";
import Hero from "../Camponents/Hero/Hero";
import Popular from "../Camponents/Popular/Popular";
import Offers from "../Camponents/Offers/Offers";
import NewCollections from "../Camponents/NewCollections/NewCollections";
import NewsLatter from "../Camponents/NewsLatter/NewsLatter";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
    </div>
  );
}

export default Shop;
