import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import './App.css'

const App = () => {
  const [userData, setuserData] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(userData);
    setuserData({
      id: '',
      name: '',
      email: '',
      password: ''
    })

  }
  const handleForm = (e) => {
    const name = e.target.name
    const value = e.target.value;

    setuserData({ ...userData, id: nanoid(), [name]: value })
  }
  return (
    <div className='App'>
      <div className='user-detail'><h1>Login Here</h1> 
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name='name' value={userData.name} onChange={handleForm} />
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={handleForm} />
          <input type="text" placeholder='Password' name='password' value={userData.password} onChange={handleForm} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App