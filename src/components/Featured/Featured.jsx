import React from 'react'
import './Featured.css'
import data_product from '../assets/data'
import Item from '../Item/Item'
const Featured = () => {
  return (
    <div className='featured'>
     <h1>RECOMMENDED FOR WOMEN</h1>
     <hr />
     <div className="featured-item">
      {data_product.map((item, i) =>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div> 
    </div>
  )
}

export default Featured
