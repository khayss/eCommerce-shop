import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>JANGO</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("laptops");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/laptops">
            Laptops
          </Link>
          {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("smartphones");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/smartphones">
            Smartphones
          </Link>
          {menu === "smartphones" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fragrances");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/fragrances">
            Perfumes
          </Link>
          {menu === "fragrances" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("skincare");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/skincare">
            Skincare
          </Link>
          {menu === "skincare" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("groceries");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/groceries">
            Groceries
          </Link>
          {menu === "groceries" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{cart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
