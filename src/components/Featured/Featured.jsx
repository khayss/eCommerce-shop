import React, {useContext} from 'react'
import './Featured.css'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'

const Featured = () => {
  const products = useContext(ShopContext);
  return (
    <div className='featured'>
     <h1>RECOMMENDED FOR WOMEN</h1>
     <hr />
     <div className="featured-item">
      {products?.map((item, i) =>{
        return <Item key={i} id={item.id} name={item.title} image={item.thumbnail} brand={item.brand} new_price={item.price} old_price={item.discountPercentage}/>
        // return <Item key={i} id={item.id} name={item.title} image={item.image} brand={item.brand} new_price={item.price} old_price={item.discountPercentage}/>
      })}
      </div> 
    </div>
  )
}

export default Featured
