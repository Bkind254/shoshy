import React from "react";
import Nike270 from "../assets/Nike Air Max 270 Liquid Metal Sneakers in Black_Photo Blue_Blue Fury.jpg";
import "./Products.css";

const Products = () => {
  return (
    <div className="card">
      <div className="imgBx">
        {/*<img
          src="https://i.pinimg.com/564x/3e/b2/f7/3eb2f70bbd7cbc175f2ae3ffa7a6486d.jpg"
          alt="shoe"
        />*/}
        <img src={Nike270} alt="shoe" />
      </div>
      <div className="details">
        <h3>
          Nike Air Max
          <br />
          <span>Men's Shoe</span>
        </h3>
        <h4>Products Details</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          atque.
        </p>
        <h4>Size</h4>
        <ul className="size">
          <li>36</li>
          <li>38</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </ul>
        <div className="group">
          <h2>
            $199<small>.99</small>
          </h2>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Products;
