import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ContextProvider from '../context/ContextProvider'
import { LoginContext } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
  
  const {id} = useParams("")

  const history = useNavigate("")

  const {account, setAccount} = useContext(LoginContext)

  const [inddata, setInddata] = useState([])

  const getinddata = async() => {
    const res = await fetch(`http://localhost:3000/getProductsOne/${id}`,{
      method:"GET",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const data = await res.json()

    if(res.status !== 201){
      console.log("no data")
    }
    else{
      console.log("getdata")
      setInddata(data)
    }
  }
  
  useEffect(() => {
   getinddata()
  }, [id])
  
  
  
  const addtocart =async(id)=>{
     const rescheck = await fetch(`http://localhost:3000/addcart/${id}`,{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json",
        
      },
      body : JSON.stringify({
        inddata
      }),
      credentials : "include"

     })


     const data1 = await rescheck.json()
     console.log(data1)

     if((rescheck).status === 401 || !data1){
      console.log("error" )
      alert("data invalid")
     }else{
      // alert("data added in your cart")
      history("/buynow")
      setAccount(data1)
     }
  }
  
  
  
  
  return (
    <div className='gap-10 flex'>
        { inddata && Object.keys(inddata).length && 
        
        <div className='h-screen flex gap-56'>
        <div className='lft items-center justify-center p-10 mx-28 '>
                <div className=''>
                      <img src={inddata.detailUrl} alt="" className='h-72'/>
                </div>  
            <div className='flex py-10 gap-5'>
            <button className='bg-orange-600 text-white py-2 px-2 rounded-lg' onClick={()=>addtocart(inddata.id)}>Add to cart</button>
            <button className='bg-orange-600 text-white py-2 px-2 rounded-lg'>Buy now</button>
            </div>
            </div>


        <div className='rgt  flex flex-col gap-4 shadow-md my-auto w-1/3 px-5 py-5'>
         <div className='font-bold text-xl  mx-auto '>{inddata.title.shortTitle}</div>
         <div className='font-semibold text-lg'>{inddata.title.longTitle}</div>
         <div className='font-semibold text-lg'>M.R.P :{inddata.price.mrp}</div>
         <div className='font-semibold text-lg flex'>Deal of the day : <div className='text-red-600'> {inddata.price.cost} </div></div>
         <div className='font-semibold text-lg flex'>You save : <div className='text-red-600'> Rs {inddata.price.mrp - inddata.price.cost} ({inddata.price.discount})</div></div>
         <div className='font-semibold text-lg'>{inddata.discount} </div>
         <p > <span style={{fontWeight: "bold"}}> About the item </span>:{inddata.description} </p>
        </div>
        </div>
        }
    </div>
  )
}

export default Cart
