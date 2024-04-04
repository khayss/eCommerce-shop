import React from 'react'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Offers from '../components/Offers/Offers';
import NewProducts from '../components/NewProducts/NewProducts';
import NewsLetter from '../components/NewsLetter/NewsLetter';


const Shop = () => {
  return (
    <div>
      <Hero/>
      {/* <Featured/>
      <Offers/> */}
      <NewProducts/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
