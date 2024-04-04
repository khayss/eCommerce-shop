import React, { useContext, useEffect } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const products = useContext(ShopContext);
  // useEffect(() => {
  //   console.log(products);
  //   console.log(props);
  // }, [products, props]);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 48 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {products?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
              key={i} id={item.id} title={item.title} thumbnail={item.thumbnail} brand={item.brand} price={item.price} discountPercentage={item.discountPercentage}
              />
              
              

              // <div key={item.id}>
              //   id={item.id}
              //   name={item.title}
              //   image={item.thumbnail}
              //   new_price={item.price}
              //   old_price={item.discountPercentage}
              // </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Next Page</div>
    </div>
  );
};

export default ShopCategory;
