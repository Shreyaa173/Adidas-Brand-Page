import React from "react";
import "./Home.css";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content-left">
          <h1>Elevate Every Move, Embrace Your Journey</h1>
          <p>Your feet are the foundation of every journey you take. At Adidas, we believe they deserve nothing but the ultimate comfort. Our innovative designs and advanced materials ensure a perfect fit, providing support and cushioning for every step. Experience the difference and elevate your performance with every stride.</p>
          <div className="buttons">
            <button className="btn btn1"><a href="https://www.adidas.com/us/new_arrivals" target="_blank">Shop Now</a></button>
            <button className="btn btn2"><a href="https://www.adidas.com/us/sale" target="_blank">Category</a></button>
          </div>
          <h4>Also Available On</h4>
          <div className="images">
          <a href="https://www.flipkart.com/" target="_blank"><img src="./images/Flipkart.png" alt="" className="shop flipkart"/></a>
          <a href="https://www.amazon.in/" target="_blank"><img src="./images/Amazon.png" alt="" className="shop"/></a>
          </div>
        </div>
        <img src="./images/Shoes.png" alt="" className="shoes" />
      </div>
    </>
  );
};

export default Content;
