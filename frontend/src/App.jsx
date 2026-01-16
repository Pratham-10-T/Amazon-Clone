import React from 'react'
import MainCompo from './components/home/MainCompo'
import Navbar from './components/Navbar'
import SubNav from './components/SubNav'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Footer from './components/Footer'
import Login from './components/Sign/Login'
import SignUp from './components/Sign/SignUp'
import Cart from './components/Cart'
import BuyNow from './components/BuyNow/BuyNow'
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState(false)
  useEffect(() => {
  setTimeout(()=>{
    setData(true)
  },2000)
  }, [])
  return (
    <>
    {
      data ?
      <div> 
   
   <BrowserRouter>
   <Navbar />
      <SubNav />
   <Routes>
    <Route path='/' element={<MainCompo />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/getProductsOne/:id' element={<Cart />}/>
    <Route path='/buynow' element={<BuyNow />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
    </div>
    :
    <div className='flex justify-center items-center w-full h-full'>
    <CircularProgress />
    <h2>Loading...</h2>
    </div>
}
    
    </>
    )
}

export default App