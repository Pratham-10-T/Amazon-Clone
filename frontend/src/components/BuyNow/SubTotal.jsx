import React from 'react'
import { useState, useEffect } from 'react'

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
    <div className='justify-end items-end flex px-4 font-bold'>
    Subtotal({iteam.length} items): {price}.00
    </div> 
  )
}

export default SubTotal