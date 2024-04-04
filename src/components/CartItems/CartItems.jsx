import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import { CartContext } from "../../context/CartContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItems = () => {
  const products = useContext(ShopContext);

  // const {products, cartItems, removeFromCart} = useContext(ShopContext)
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="cartitems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cart?.map((e) => {
        return (
          <div key={e.id}>
            <div className="cartitems-format cartItems-format-main">
              <img src={e.thumbnail} alt="" className="carticon-product-icon" />
              <p>{e.title}</p>
              <p>${e.price}</p>
              <input
                type="number"
                className="cartitems-quantity"
                value={e.quantity}
                onChange={(e) => {
                  setCart((prev) =>
                    prev.map((item) => {
                      if (item.id === e.id)
                        return { ...item, quantity: e.target.value+1 };
                      return item;
                    })
                  );
                }}
              />
              <p>${e.price * e.quantity}</p>
              <img
                src={remove_icon}
                onClick={() => {
                  setCart((prev) => prev.filter((item) => item.id !== e.id));
                }}
                alt=""
                className="cartitems-remove-icon"
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Product Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${(() => {
                  const totalAmount = cart.map(
                    (item) => item.price * item.quantity
                  );
                  return totalAmount.reduce((accumulator, currentvalue) => {
                    return accumulator + currentvalue;
                  }, 0);
                })()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                $
                {(() => {
                  const totalAmount = cart.map(
                    (item) => item.price * item.quantity
                  );
                  return totalAmount.reduce((accumulator, currentvalue) => {
                    return accumulator + currentvalue;
                  }, 0);
                })()}
              </h3>
            </div>
            <button>PROCEED TO PAY</button>
          </div>
        </div>
        <div className="cartitems-promo-code">
          <p>Enter promo code here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
