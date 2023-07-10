import React from "react";
import Nike97 from "../assets/Nike Air Max 97 Silver Bullet US Release Date _ SneakerNews_com.jpg";
import "./Cards.css";

const Cards = ({ image, title, subTitle, details, sizes, price }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src={image} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title}
            <br />
            <span>{subTitle}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="imgBx">
          <img src={Nike97} alt="shoe" />
        </div>
        <div className="details">
          <h3>
            {title}
            <br />
            <span>{subTitle}</span>
          </h3>
          <h4>Products Details</h4>
          <p>{details}</p>
          <h4>Size</h4>
          <ul className="size">
            {sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
          <div className="group">
            <h2>${price}</h2>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
