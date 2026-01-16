import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import getProducts from './Products';
import { NavLink } from 'react-router-dom';

const products = getProducts()
const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Slide = ({title}) => {
  return (
    <div className=''>
    <div className='flex justify-between'>

<div className='text-3xl font-bold'>
          {title}
      </div>
      <button className='bg-blue-700 text-white py-2 px-2'>View All</button>
          </div>

          <Carousel 
          swipeable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          responsive={responsive}
          draggable={false}
          centerMode={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          className=''
          > 
          {
            products.map((e)=>{
              return (
                <NavLink to={`/getProductsOne/${e.id}`}>
                <div className='py-10'>
                  <div className='h-40'>
                    <img src={`${e.url}`} alt="" className='h-3/4'/>
                  </div>
                  <p>{`${e.title.shortTitle}`}</p>
                  <p>{`${e.discount}`}</p>
                  <p>{`${e.tagLine}`}</p>
                </div>
                </NavLink>
              )
            })
          }
          
          </Carousel>
          </div>
  )
}

export default Slide