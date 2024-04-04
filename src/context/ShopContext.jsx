import React, { createContext, useState } from "react";
// import all_product from '../components/assets/all_product'
import useGetProducts from "../Hooks/getProducts";
// import Item from "../components/Item/Item";

export const ShopContext = createContext(null);

// const getDefaultCart = (prod)=>{
//   let cart = {};
//   for (let index = 0; index < prod.length; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// }

const ShopContextProvider = (props) => {
  const products = useGetProducts();
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  // const products = {useGetProducts(), cartItems};

  // console.log(cartItems)
  // const contextValue = {Item};
  
  return (
    <ShopContext.Provider value={products}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;