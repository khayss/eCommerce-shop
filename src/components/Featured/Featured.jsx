import React, {useContext} from 'react'
import './Featured.css'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'

const Featured = () => {
  const products = useContext(ShopContext);
  return (
    <div className='featured'>
     <h1>BEST SELLERS</h1>
     <hr />
     <div className="featured-item">
      {products?.slice(9,13).map((item, i) =>{
        return <Item key={i} id={item.id} title={item.title} thumbnail={item.thumbnail} brand={item.brand} category={item.category} price={item.price} discountPercentage={item.discountPercentage}/>
        // return <Item key={i} id={item.id} name={item.title} image={item.image} brand={item.brand} new_price={item.price} old_price={item.discountPercentage}/>
      })}
      </div> 
    </div>
  )
}

export default Featured
