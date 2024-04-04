import React, {useContext} from 'react'
import './NewProducts.css'
import {ShopContext} from '../../context/ShopContext'


import Item from '../Item/Item'

const NewProducts = () => {
  const products = useContext(ShopContext);
  console.log(products)
  return (
    <div className='newproducts'>
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="products">
        {products?.map((item, i) => {
          return <Item key={i} id={item.id} title={item.title} thumbnail={item.thumbnail} brand={item.brand} price={item.price} discountPercentage={item.discountPercentage}/>
        })}
      </div>
    </div>
  )
}

export default NewProducts
