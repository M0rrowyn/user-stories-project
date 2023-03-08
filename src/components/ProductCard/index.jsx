import React from "react";
import "./style.css";
import ProductPhoto from "../../assets/images/product-photo/lenovo-laptop-y50.png";
import CartImage from "../../assets/images/cart-image/cart.svg";

const ProductCard = ({ title, price, quantity }) => (
  <div className="product-card">
    <div className="product-card-wrapper">
      <div className="product-card-content">
        <img
          src={ProductPhoto}
          className="product-card-photo"
          alt="Notebook"
        ></img>
        <h3 className="product-card-title">{title}</h3>
        <div className="product-card-info">
          <div className="product-card-price">{price}</div>
          <div className="product-card-quantity">{quantity}</div>
        </div>
        <div className="product-card-button-wrapper">
          <button className="product-card-button">
            <img src={CartImage}  className="product-card-button-image" alt="Cart"></img>Готовий до відправки
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
