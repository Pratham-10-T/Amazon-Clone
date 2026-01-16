import React from 'react'

const SubNav = () => {
  return (
    <div>
        <div className='bg-blue-500 h-9.5 flex '>
         <div className='left  flex w-3/4 gap-2 items-center justify-center '>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>All</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Mobile</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Bestseller</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Fashion</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Customer Services</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Electronics</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Prime</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Today's deal</p>
         <p className='hover:border border-white rounded-full px-3 py-1 cursor-pointer'>Amazon Pay</p>

         </div>

         <div className='right cursor-pointer h-full '>
          <img src="https://github.com/harsh17112000/E-commerceapp/blob/main/client/public/nav.jpg?raw=true" alt="" />
         </div>
        </div>
    </div>
  )
}

export default SubNav