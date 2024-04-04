import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
