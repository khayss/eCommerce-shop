// import { useContext } from "react";
import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/ShopContext";

// function Item() {
//   const products = useContext(ShopContext);
//   return (
//     <div>
//       {products?.map((item) => (
//         <div className="item" key={item.id}>
//           <img src={item.thumbnail} alt="" />
//           <p>Name: {item.title}</p>
//           <p>Category: {item.category}</p>
//           <p>Brand: {item.brand}</p>
//           <div className="item-prices">
//             <div className="item-price-new">
//              Price: ${item.price}
//             </div>
//             <div className="item-price-old">{item.discountPercentage}% discount</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

const Item = (props) => {
  
  return (
    <div className="item">
     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.thumbnail} alt="" /> </Link> 
      <p>Product Name: {props.title}</p>
      <p>Brand: {props.brand}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Price: ${props.price}
        </div>
        <div className="item-price-old">
          {props.discountPercentage}% discount
        </div>
      </div>
    </div>
  )
}

export default Item;
