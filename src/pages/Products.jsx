import React from "react";
import Nike270 from "../assets/Nike Air Max 270 Liquid Metal Sneakers in Black_Photo Blue_Blue Fury.jpg";
import Nike97 from "../assets/Nike Air Max 97 Silver Bullet US Release Date _ SneakerNews_com.jpg";
import Nikesh from "../assets/Nike Shoes.png";
import Cards from "../components/Cards";

const Products = () => {
  return (
    <>
      <Cards
        image={Nike270}
        title="Nike Air Max"
        subTitle="Men's Shoe"
        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, atque."
        sizes={["36", "38", "40", "42", "44"]}
        price={199.99}
      />
      {/*
      <Cards
        image={Nike97}
        title="Nike Air Max 97"
        subTitle="Men's Shoe"
        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, atque."
        sizes={["36", "38", "40", "42", "44"]}
        price={199.99}
      />
      <Cards
        image={Nikesh}
        title="Nike Shoes"
        subTitle="Men's Shoe"
        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, atque."
        sizes={["36", "38", "40", "42", "44"]}
        price={199.99}
      />*/}
    </>
  );
};

export default Products;
