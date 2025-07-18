import React from 'react'
import OnlineCakeDelivery from './Home/OnlineCakeDelivery'
import CakeSwiper from './Home/CakeSwiper'
import BestsellerCakesOnline from './Home/BestsellerCakesOnline'
import Slider from './Home/Slider'
import ProductTypes from './Home/ProductTypes'
import Testimonial from './Home/Testimonial'
import RelatedBlog from './Home/RelatedBlog'
import ShopByOccasions from './Home/ShopByOccasions'
import FlowerAura from './Home/FlowerAura'
import Demo from './Home/Demo'
import CreateProduct from './admin/products/CreateProduct'
import AllProducts from './admin/products/AllProducts'

const Home = () => {
  return (
    <div>
      {/* <Demo/> */}
      <AllProducts/>
      <CreateProduct/>
      <CakeSwiper />
      <OnlineCakeDelivery />
      <ShopByOccasions />
      <BestsellerCakesOnline />
      <Slider />
      <ProductTypes />

      <Testimonial />
      <FlowerAura />
      <RelatedBlog />
    </div>
  )
}

export default Home