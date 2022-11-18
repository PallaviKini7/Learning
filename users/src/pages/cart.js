import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
import './cart.css'

const Cart = () => {
  let sum =0;
  const products = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleRemove = (productsId) => {
    dispatch(remove(productsId))
  }

  return (
    <div className='cart'>
      <h3>Cart Products</h3>
      <div className='cart-wrapper'>
        {
          products.map(products => (
            <div className='cart-card'>
              <img src={products.image} alt="" />
              <h3>{products.title}</h3>
              <h4>Price:${products.price}</h4>
              <button className='btn' onClick={() => handleRemove(products.id)}>Remove</button>

            </div>
            
          ))
        }
      </div>

    </div>
  )
}

export default Cart