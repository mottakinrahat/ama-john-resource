import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Shop from './component/header/shop/Shop'

function App() {
  return(
    <>
    <Header/>
    <Shop/>
    </>
  )
  
}

export default App
