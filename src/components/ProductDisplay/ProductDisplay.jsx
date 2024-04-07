import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { CartContext } from "../../context/CartContext";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { setCart } = useContext(CartContext);
  const { product } = props;
  // const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product?.thumbnail} alt="" />
          <img src={product?.thumbnail} alt="" />
          <img src={product?.thumbnail} alt="" />
          <img src={product?.thumbnail} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product?.thumbnail}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.title}</h1>
        <div className="productdisplay-right-star">
          <p>Rating: ({product?.rating})</p>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">
            Price: ${product?.price} |
          </div>
          <div className="productdisplay-right-price-discount">
            Discount: {product?.discountPercentage}%
          </div>
        </div>
        <div className="productdisplay-right-description">
          Description: {product?.description}
        </div>
        <p style={{ marginTop: "20px", fontWeight: "600" }}>
          Stock: {product?.stock}
        </p>
        <div className="productdisplay-right-color">
          <h1>Select Color</h1>
          <div className="productdisplay-right-colors">
            <div style={{ color: "white", background: "black" }}>White</div>
            <div style={{ color: "#c4c407" }}>Yellow</div>
            <div style={{ color: "black" }}>Black</div>
            <div style={{ color: "blue" }}>Blue</div>
            <div style={{ color: "red" }}>Red</div>
          </div>
        </div>
        <button
          onClick={() => {
            setCart((prev) => {
              const index = prev.findIndex((item) => item.id === product?.id);
              if (index < 0) return [...prev, { ...product, quantity: 1 }];
              return prev;
            
            });
          }}
        >
          ADD TO CART
        </button>
        {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}
        <p className="productdisplay-right-category">
          <span>Category: </span>
          {product?.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Latest, Brand New
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
