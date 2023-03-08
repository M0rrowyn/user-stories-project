import React from "react";
import "./style.css";
import LogoIcon from "../../assets/images/admin-table/admin-table-icon.svg";
import ProductCard from "../../components/ProductCard";

const ProductsPreview = () => {
  return (
    <section className="product-preview-page">
      <img src={LogoIcon} className="product-preview-logo" alt="Logo"></img>
      <div className="product-preview-card">
        <ProductCard className="product-preview-card-item"
          title="Ноутбук Lenovo Y50-70 Aluminum Black"
          price="25000₴"
          quantity="Кількість: 5"
        />
        <ProductCard className="product-preview-card-item"
          title="Ноутбук Lenovo Y50-70 Aluminum Black"
          price="25000₴"
          quantity="Кількість: 5"
        />
        <ProductCard className="product-preview-card-item"
          title="Ноутбук Lenovo Y50-70 Aluminum Black"
          price="25000₴"
          quantity="Кількість: 5"
        />
        
      </div>
    </section>
  );
};

export default ProductsPreview;
