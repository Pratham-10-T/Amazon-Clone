import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    
        const [logData, setData] = useState({
            fname:"",
            email:"",
            number:"",
            password:"",
            confirmPassword:""
            
        })

console.log(logData)

        const addData = (e) => {
          const {name, value} = e.target
          
          setData(()=>{
            
          return {
            ...logData,
            [name]: value
            
            }
            
        })
        
        }
    

const senddata = async(e)=>{
  e.preventDefault()
  const { fname, email, number, password, confirmPassword } = logData
  const res = await fetch("http://localhost:3000/signup", {
    method : "POST",
    headers : {"Content-Type" : "application/json"
},
body : JSON.stringify({
    fname, email, number, password, confirmPassword 
}),
})
const data = await res.json()

if(res.status === 422 || !data){
    toast.warn('Invalid credentials!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
}else{
    toast.success('Success!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    setData({...logData, fname:"", email:"", number:"", password:"", confirmPassword:""})
}
}

    return (
        
        <div className='flex flex-col justify-center items-center py-6  gap-4'>
<form onSubmit={senddata} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" className='h-12 ' />

            <div className=' shadow-2xl px-14 py-3  '>
                <div className='font-bold text-3xl'>
                    Sign Up
                </div>

                <div className='text-black flex flex-col py-5 gap-1'>

                    <div className='gap-2 flex flex-col'>
                        <div className='font-semibold text-lg'><label htmlFor="fname"> Your Name</label></div>
                        <input
                            type="text"
                            className='border border-black rounded-md text-center'
                            placeholder='Enter your name'
                            name='fname'
                            id='fname'
                            onChange={addData}
                            value={logData.fname}
                        />

                    </div>


                    <div className='gap-2 flex flex-col'>
                        <div className="font-semibold text-lg"><label htmlFor="email"> Email </label>           </div>
                        <input
                            type="text"
                            className='border border-black rounded-md text-center '
                            placeholder='Enter your email'
                            name='email'
                            id='email'
                            onChange={addData}
                            value={logData.email}
                        />
                    </div>

                    <div className='gap-2 flex flex-col'>
                        <div className="font-semibold text-lg"><label htmlFor="number"> Mobile Number</label></div>
                        <input
                            type="number"
                            className='border border-black rounded-md text-center'
                            placeholder='Enter Contact number'
                            name='number'
                            id='mobile'
                            onChange={addData}
                            value={logData.number}
                        />

                    </div>

                    <div className='gap-2 flex flex-col'>
                        <div className="font-semibold text-lg"><label htmlFor="password">  Password</label></div>
                        <input
                            type="password"
                            className='border border-black rounded-md text-center'
                            placeholder='Enter password'
                            name='password'
                            id='password'
                            onChange={addData}
                            value={logData.password}
                        />

                    </div>

                    <div className='gap-2 flex flex-col'>
                        <div className="font-semibold text-lg"><label htmlFor="confirmPassword">  Password  Again</label> </div>
                        <input
                            type="password"
                            className='border border-black rounded-md text-center'
                            placeholder='Enter password'
                            name='confirmPassword'
                            id='confirmPassword'
                            onChange={addData}
                            value={logData.confirmPassword}
                            
                        />

                    </div>
                    <div className='py-3 flex flex-col'>
                        
                        <button 
                        type='submit'
                        className='bg-orange-500 mx-auto rounded-md px-4 py-1'
                        onClick={()=>{
                            
                            if(logData.password!==logData.confirmPassword){
                                alert("passwords must match")
                            } else {
                              
                              alert("Success")
                            }
                            
                           
                        }}
                        > continue </button>
                    </div>
                    
                </div>
            </div>
            </form>
            <div className='flex '>
                <div className='mx-2'> Already have an account? </div>
                <Link to="/login" className='text-blue-600'>Login</Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp
