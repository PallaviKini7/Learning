import React from 'react'
import Product from '../component/products/product'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <h2>welcome To Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Product/>

      </section>
    </div>
  )
}

export default Home