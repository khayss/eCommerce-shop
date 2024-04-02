import React, { useState, useEffect } from 'react'

import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

// function ProductItems() {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch ("https://dummyjson.com/products/");
//       const data = await response.json();
//       if (response.ok) {
//         setProducts(data?.products)
//       }
//     };
//     fetchProducts();
//   }, [])

//   return(
//     <div>
//       {
//         products.map(item => (
//           <div key={item.id }></div>
//         ))
//       }
//     </div>
//   )
// }
  
export default Item
// export default ProductItems
