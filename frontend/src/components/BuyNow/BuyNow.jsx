import React, { useEffect } from 'react'
import Divider from '@mui/material/Divider'
import Options from './Options'
import SubTotal from './SubTotal'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Right from '../Right'
const BuyNow = () => {
    

 
   const [cartData, setCartData] = useState("")


   const getCartData = async() =>{
    const res = await fetch("http://localhost:3000/cartdetails",{
      method: "GET",
      headers:{
        "Content-Type" : "application/json"
      },
      credentials : "include"
    })
    const data = await res.json()
    if(res.status !== 201){
      console.log("no data")
    }else{
      console.log("getCartData")
      setCartData(data.carts)
    }
   }

   useEffect(()=>{
    getCartData()
   },[])


  return (
    <>{
      cartData.length ? <div className='bg-gray-200 h-screen px-4 py-24 flex gap-10'>

      <div className=' h-1/3     px-4 '>
        <div className='px-4 bg-white'>
<div className='font-semibold text-2xl '> Shopping cart </div>
<p className='text-blue-500'>Select all items</p>
<Divider />
</div>

{
  cartData.map((e, k)=>{
    return (
      <>
      <div className='py-4 flex bg-white'>

<div className='px-4'>
  <img src={e.detailUrl} alt="" className='h-48 object-contain '/>
</div>

<div className='px-4'>
  <div className='flex gap-16 '>
  <div className='font-semibold '>{e.title.longTitle}</div>
 <div> {e.price.cost} </div>
  </div>
<div className='font-semibold '>{e.title.shortTitle}</div>
<p className='text-red-600'>Usually dispatched in 8 days</p>
<p>Eligible for free shipping.</p>
<img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" className='h-5'/>
<Options deleteData ={e.id} get={getCartData} />
<SubTotal iteam={cartData}/>


</div>

</div>
      
      </>
    )
  })
}

</div>
      
      <Right iteam={cartData}/>
  </div>
                    : "" }
    
</>
  )
  
}

export default BuyNow