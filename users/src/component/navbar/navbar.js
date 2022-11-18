import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

const items = useSelector((state)=>state.cart) 

  return (
    <div className='navbar'>
      
      <div>REDUX STORE🏬</div>
      <div className='components-nav'>
      <Link to ='/Cart' className='link'><div className='nav-comp'>Home</div></Link>
        <Link to ='/' className='link'><div className='nav-comp'>Cart</div></Link>
        
        <span className='cart-count'>Cart Item :{items.length}</span>
      </div>
       
      
    </div>
  )
}

export default Navbar