import React, { useState, useEffect } from 'react'
import './UseEffect.css'

function ProductItems() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch ("https://dummyjson.com/products/");
      const data = await response.json();
      if (response.ok) {
        setProducts(data?.products)
      }
    };
    fetchProducts();
  }, [])
  console.log(products)
  return(
    <div className='main-products'>
      {
        products.map(item => (
          <div className='product-card' key={item.id }></div>
        ))
      }
    </div>
  )
}

export default ProductItems