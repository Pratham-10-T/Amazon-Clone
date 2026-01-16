import React from 'react'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
const Sidebar = ({logClose}) => {
  
  const {account, setAccount} = useContext(LoginContext)
  
    return (
    <>
      <div className='flex flex-col gap-1 '>
        <div className='bg-black p-6'>
            {
                account ? <Avatar>{account.fname[0].toUpperCase()}</Avatar> 
                : <Avatar></Avatar>
            }
            {
                account ? <h3>Hello, {account.fname.toUpperCase()}</h3>
                :
                ""
            }
       
        </div>
<div className='bg-white flex flex-col p-6 gap-3 font-semibold' onClick={logClose}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Shop by category</NavLink>
    <Divider />
    <NavLink to="/">Today's Deals</NavLink>
    {
        account ?  <NavLink to="/buynow">Your Orders</NavLink>
        : <NavLink to="/login">Your Orders</NavLink>
    }
    <Divider />
    <NavLink to="/">Settings</NavLink>
    <NavLink to="/signup">Sign in</NavLink>
    


</div>
      </div>


    </>
  )
}

export default Sidebar