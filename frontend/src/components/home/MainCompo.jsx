import React from 'react'
import Banner from './Banner'
import Navbar from '../Navbar'
import Slide from './Slide'
import SubNav from '../SubNav'
import Footer from '../Footer'
import Cart from '../Cart'
import getProducts from "../redux/actions/Action"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'


const MainCompo = () => {

const {products} = useSelector(state => state.getproductsdata)
console.log(products)

const dispatch = useDispatch()


useEffect(() => {
  dispatch(getProducts())
}, [dispatch])



  return (
    <div>
      
      <Banner />
      <div className=''>
      <div className='flex py-8 '>
      <div className='w-3/4 border shadow-md px-4'>
        <Slide title="Deal of the day"/>
        </div>
        <div className='border shadow-md '>
          <div className='mx-14 font-bold text-lg'>  Festive latest launches </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"  alt="" className='object-contain px-4 py-5' />
            <a href="#" className='mx-28'>See more</a>
        </div>
        </div>
       <div className='w-full  px-4'>
        <Slide title="Upto 80% off"/>
        </div>
        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" className='items-center justify-center mx-auto'/>
        <div className='w-full  py-4 px-4'>
        <Slide title="Bumper deals " />
        </div>
        </div>
     
       
    </div>
  )
}

export default MainCompo