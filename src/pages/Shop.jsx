import React from "react";
import Navbar from "../Camponents/Navbar/Navbar";
import Hero from "../Camponents/Hero/Hero";
import Popular from "../Camponents/Popular/Popular";
import Offers from "../Camponents/Offers/Offers";
import NewCollections from "../Camponents/NewCollections/NewCollections";
import NewsLatter from "../Camponents/NewsLatter/NewsLatter";
import Footer from "../Camponents/Footer/Footer";

function Shop() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
      <Footer />
    </div>
  );
}

export default Shop;
