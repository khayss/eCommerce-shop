import { useContext } from "react";
import "./CartItems.css";
// import { ShopContext } from "../../context/ShopContext";
import { CartContext } from "../../context/CartContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  // const products = useContext(ShopContext);
  // const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  // const addBtn = () =>{
  //   const add = Number(count) + 1
  //   setCount(add)
  // };
  // const minusBtn = () =>{
  //   const minus = Number(count) - 1
  //   setCount(minus)
  // };
  const handleChange = (e, id) => {
    setCart((prev) =>
      prev.map(
        (item) =>
          (item.id = id
            ? {
                ...item,
                quantity: e.target.value === "" ? "" : +e.target.value,
              }
            : item)
      )
    );
  };

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
      {cart?.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <div className="cartitems-format cartItems-format-main">
              <img
                src={cartItem.thumbnail}
                alt=""
                className="carticon-product-icon"
              />
              <p>{cartItem.title}</p>
              <p>${cartItem.price}</p>
              <div className="cartitems-quantity-group">
                <button
                  className="cartitems-quantity-button decrementbtn"
                  onClick={() =>
                    setCart((prev) =>
                      prev.map((item) => {
                        if (item.id === cartItem.id) {
                          return {
                            ...item,
                            quantity: item.quantity < 2 ? 1 : item.quantity - 1,
                          };
                        } else {
                          return { ...item };
                        }
                      })
                    )
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="cartitems-quantity"
                  value={cartItem.quantity}
                  onChange={(e) => {
                    handleChange(e, cartItem.id);
                  }}
                />
                <button
                  className="
              cartitems-quantity-button incrementbtn"
                  onClick={() =>
                    setCart((prev) =>
                      prev.map((item) => {
                        if (item.id === cartItem.id) {
                          return { ...item, quantity: item.quantity + 1 };
                        } else {
                          return { ...item };
                        }
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* <button className="cartitems-quantity" onClick={e.quantity+1}>{e.quantity}</button> */}

              <p>${cartItem.price * cartItem.quantity}</p>
              <img
                src={remove_icon}
                onClick={() => {
                  setCart((prev) =>
                    prev.filter((item) => item.id !== cartItem.id)
                  );
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
              <p>
                $
                {(() => {
                  const totalAmount = cart.map(
                    (item) => item.price * item.quantity
                  );
                  return totalAmount.reduce((accumulator, currentvalue) => {
                    return accumulator + currentvalue;
                  }, 0);
                })()}
              </p>
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
