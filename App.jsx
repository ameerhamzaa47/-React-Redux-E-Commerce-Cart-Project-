import React from 'react'
import './App.css'
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carts from './Component/Carts'
import CartsDetail from './Component/CartsDetail'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Carts/>}/>
        <Route path='/cartsDetail/:id' element={<CartsDetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
