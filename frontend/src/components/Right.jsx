import React from 'react'
import { useState, useEffect } from 'react'

const Right = ({iteam}) => {
  
    const SubTotal = ({iteam}) => {
        const [price, setPrice] = useState(0)
        
        
        useEffect(() => {
        total()
        }, [iteam])
        
        
          const total =()=>{
        let price = 0;
        iteam.map((item)=>{
          price += item.price.cost
        })
        setPrice(price)
          }
  
  
  
  
    return (




<div className='  h-1/3 gap-4 px-2 py-2'>
        <div className='flex flex-col gap-4'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" className='h-12'/>
          <div className='bg-white justify-center items-center flex flex-col gap-1'>
             <p className='text-blue-500 '> Your order is eligible for free delivery. </p>
          <p>Select this item at checkout. Details</p>
          <p className='text-xl'>Subtotal ({iteam.length} items): <span className='font-bold'> {price}.00 </span></p>
          <button className='bg-yellow-400 p-1 rounded-lg py-2 px-2 my-3'>Proceed to buy</button>
          
          <div className='border-b-slate-500 p-2 '>
           Emi available
          </div>
          </div>
      </div>
    </div>
  )
}
}
export default Right