import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/cart'
import Cart from './pages/home'
import Navbar from './component/navbar/navbar'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <div className='App'>
      <Provider store ={store}>
      <Navbar/>
      <Routes>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
     
      </Provider>
     
    </div>
  )
}

export default App
