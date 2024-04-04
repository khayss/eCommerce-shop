import React, { createContext, useState } from "react";
import useGetProducts from "../Hooks/getProducts";
// import Item from "../components/Item/Item";

export const ShopContext = createContext(null);

// const getDefaultCart = ()=>{
//   let cart = {};
//   for (let index = 0; index < useGetProducts().length+1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// }

const ShopContextProvider = (props) => {
  const products = useGetProducts();
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  
  
  // const addToCart = (itemId) => {
  //   setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
  //   console.log(cartItems);
  // }
  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
  // }

  // const products = {useGetProducts(), cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={products}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;