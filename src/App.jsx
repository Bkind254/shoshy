import React, { useState } from "react";
import "./App.css";
import LOGO from "./assets/Nike decide deixar de vender seus produtos na Amazon.png";
import NIKE270 from "./assets/Nike Air Max 270 Liquid Metal Sneakers in Black_Photo Blue_Blue Fury.jpg";
import NIKE97 from "./assets/Nike Air Max 97 Silver Bullet US Release Date _ SneakerNews_com.jpg";
import NIKESH from "./assets/Nike Shoes.png";
import { CgInstagram } from "react-icons/cg";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const [currentImage, setCurrentImage] = useState(NIKE270);

  const imgSlider = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  const changeBgColor = (color) => {
    // Implement your logic to change the background color here
    document.documentElement.style.setProperty("--bg-color", color);
  };

  return (
    <>
      <section className="sec">
        <header>
          <a href="#">
            <img src={LOGO} className="logo" alt="logo-here" />
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">What's New</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
        <div className="content">
          <div className="textBox">
            <h2>
              That's What
              <br />
              <span>I like</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              quis cupiditate commodi facilis porro, enim similique mollitia
              distinctio ratione voluptates labore, minima a inventore? Nesciunt
              fugiat voluptates vel consequuntur quibusdam! Lorem ipsum dolor
              sit amet
            </p>
            <a href="#">View All Products</a>
          </div>
          <div className="imgBox">
            <img src={currentImage} className="pepsi" alt="product" />
          </div>
        </div>
        <ul className="thumb">
          <li>
            <img
              src={NIKE270}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKE270);
                changeBgColor("#0062be");
              }}
            />
          </li>
          <li>
            <img
              src={NIKESH}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKESH);
                changeBgColor("#e60c2c");
              }}
            />
          </li>
          <li>
            <img
              src={NIKE97}
              alt="thumbnail"
              onClick={() => {
                imgSlider(NIKE97);
                changeBgColor("#1e1e1e");
              }}
            />
          </li>
        </ul>
        <ul className="sci">
          <li>
            <a href="#">
              <img src={AiFillFacebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={CgInstagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
