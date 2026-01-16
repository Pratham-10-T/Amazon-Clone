import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../../context/ContextProvider'

const Options = ({deleteData, get}) => {
   
  const {account, setAccount} = useContext(LoginContext)

  const delData =async()=>{
     const res = fetch(`http://localhost:3000/delete/${id}`,{
      method:"DELETE",
      headers:{
        Accept : "application/json",
        "Content-Type": "application/json"
      },
      credentials : "include"
     })
     const data = await res.json()
     if(res.status !== 201){
      console.log("error")
     }else{
     get()
      console.log("item deleted")
      setAccount(data)
     }
  }
  return (

    <div className='p-5 border-black flex gap-4  items-center'>
        <select className='rounded-lg p-1 border-black '>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <p className='cursor-pointer text-blue-500' onClick={()=>delData(deleteData)}>Delete</p> |
        <p className='cursor-pointer text-blue-500'>Save for later</p> |
        <p className='cursor-pointer text-blue-500'>See more like this</p>
    </div>
  )
}

export default Options