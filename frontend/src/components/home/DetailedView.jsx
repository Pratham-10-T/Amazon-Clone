import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailedView = () => {
  const location = useLocation();
  const params = useParams();

  // Fallback empty object in case state is null
  const {
    url = '',
    shortTitle = '',
    longTitle = '',
    description = '',
    price = '',
    discount = '',
    tagline = ''
  } = location.state || {};

  // Optional: Redirect or show fallback if state is missing
  if (!location.state) {
    return (
      <div className='p-10 text-red-600'>
        No product data received. Please go back and click on a product again.
      </div>
    )
  }

  return (
    <div className='p-10 flex gap-10 bg-white text-black'>
      <img src={url} alt="product" className='h-80 w-80 object-contain border' />
      <div>
        <h2 className='text-2xl font-bold'>{longTitle}</h2>
        <p className='text-lg mt-2'>{shortTitle}</p>
        <p className='text-sm mt-2 text-gray-700'>{description}</p>
        <p className='text-xl mt-2 font-semibold'>₹{price}</p>
        <p className='text-green-600 mt-2'>{discount}</p>
        <p className='text-blue-500 mt-2'>{tagline}</p>
      </div>
    </div>
  )
}

export default DetailedView
