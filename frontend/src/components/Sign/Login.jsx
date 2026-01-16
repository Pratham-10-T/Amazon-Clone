    import React from 'react'
    import SignUp from './SignUp'
    import { Link, useNavigate } from 'react-router-dom'
    import { useState } from 'react'
    import { ToastContainer, toast, Bounce } from "react-toastify";
    import 'react-toastify/dist/ReactToastify.css';
    import { LoginContext } from '../../context/ContextProvider';
    import { useContext } from 'react';

    const Login = () => {

    
  const {account, setAccount} = useContext(LoginContext)

        const [logData, setData] = useState({
        email:"",
        password:""
    })
    console.log(logData)

    const addData = (e) =>{
        const {name, value} = e.target;
        setData(()=>{
            return {
                ...logData,
                [name]:value
            }
        })
    }


    const senddata = async(e)=>{
        e.preventDefault()

        const {email, password} = logData
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json",
               
            },
            body : JSON.stringify({
                email, password
            }),
            credentials : "include"
        })

        const data = await res.json()
        
        if(res.status === 400 || !data){
            toast.warn('Invalid credentials!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }else{
            setAccount(data)
            toast.success('Success!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                setData({...logData, email:"", password:""})
        }
    }

        return (

            <div className='flex flex-col justify-center items-center py-6  gap-7'>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" className='h-12 ' />
                <form >
                    <div className=' shadow-2xl px-14 py-3'>
                        <div className='font-bold text-2xl'> Login</div>

                        <div className='text-black  flex flex-col py-5 gap-1'>
                            <div className='gap-2 flex flex-col'>
                                <div className='font-semibold text-lg'>
                                    <label htmlFor="email"> Email</label>
                                </div>
                                <input
                                    type="text"
                                    className='border border-black rounded-md text-center '
                                    placeholder='Enter your email'
                                    name='email'
                                    id='email'
                                    value={logData.email}
                                    onChange = {addData}
                                    
                                    
                                    
                                    
                                />
                            </div>

                            <div className='gap-2 flex flex-col'>
                                <div className='font-semibold text-lg'>
                                    <label htmlFor="password"> Password</label>
                                </div>
                                <input
                                    type="password"
                                    className='border border-black rounded-md text-center'
                                    placeholder='Enter password'
                                    name='password'
                                    id='password'
                                    value={logData.password}
                                    onChange = {addData}
                                />
                                
                        </div>
                            <div className='py-2 flex flex-col'>  <button 
                            className='bg-orange-500 mx-auto rounded-md px-4 py-1'
                            onClick={senddata}
                            > continue </button>
                            </div></div>

                    </div>
                </form>

                <div className=' flex flex-col'>
                    <div className='mx-16'> New to Amazon? </div>
                    <div className='py-7 mx-auto '>
                        <Link to="/signup" className='bg-slate-400 p-3 mx-auto rounded-full '> Create your amazon account </Link>
                    </div>
                </div>
                <ToastContainer />
            </div>

        )
    }

    export default Login