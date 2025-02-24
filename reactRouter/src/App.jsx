import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Headers } from './Components/Index'

function App() {
  return (
    <>
      <Headers/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
