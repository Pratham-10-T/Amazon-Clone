import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import { useState, useEffect, useContext } from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import {useSelector} from "react-redux"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
const Navbar = () => {

  
  const { account, setAccount } = useContext(LoginContext)
const history = useNavigate()
  const [drOpen, setDrOpen] = useState(false)

const [text, setText] = useState("")
console.log(text);
const [liopen, setLiopen] = useState(true)

const {products} = useSelector(state => state.getproductsdata)

  const getDetailValidUser = async () => {
    const res = await fetch("http://localhost:3000/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    const data = await res.json()

    if (res.status !== 201) {
      console.log("error")
    } else {
      console.log(data)
      setAccount(data)
    }

  }

  const handleOpen = () => {
    setDrOpen(true)
  }
  const handledrClose = () => {
    setDrOpen(false)
  }

  const getText =(iteams)=>{
setText(iteams)
setLiopen(false)
  }

  useEffect(() => {
    getDetailValidUser()
  }, [])


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = async(req, res)=>{
  const res2 = await fetch("http://localhost:3000/logout", {
    method:"GET",
    headers:{
      Accept : "application/json",
      "Content-Type": "application/json"
    },
    credentials : "include"
  })
    const data2 = await res2.json()
    if(res2.status !== 201){
    console.log("error");
    }else{
      history("/")
      setAccount(false)
      
    }
}

  return (
    <header className=''>
      <nav className='bg-blue-900 h-16  flex items-center gap-36 justify-center'>
        <IconButton onClick={handleOpen}>
          <MenuIcon className='' />
        </IconButton>
        <Drawer open={drOpen} onClose={handledrClose}>
          <Sidebar logClose={handledrClose} />
        </Drawer>
        <div className='left flex  justify-center items-center gap '>

          <NavLink to="/" className=' text-white  flex px-5 '>
            <img
              src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
              alt=""
              className='h-10 object-contain  flex -ml-10' />
          </NavLink>
          <div className='bg-white px-4 py-1 rounded-md  flex items-center relative flex-col w-[400px]'>
            <input
              type="text"
              onChange={(e)=>getText(e.target.value)}
              placeholder='Search'
              className='w-full px-3 pr-10 py-1 outline-none' />
            {/* <div className='justify-end items-end'> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z0-U6XJwKoz3kyJ5Dd9qk8kBa7CymNTazw&s"
              alt=""
              className='h-8 w-8  absolute right-3' />
            {/* </div> */}
          </div>
          <div className='flex flex-col'>
          { 
          text &&
          
          <List hidden={liopen} className="bg-white text-black ">
             {
              products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                  <NavLink to={`/getProductsOne/${product.id}`} onclick={()=>setLiopen(true)}>
                  {product.title.longTitle}
                  </NavLink>
                </ListItem>
              ))
             }
          </List>
          }</div>

        </div>

        <div className="right flex gap-11">
          <NavLink to="/login" className='text-black px-3 py-2 text-xl hover:border font-bold border-white rounded-full'>Sign In </NavLink>


          {
            account ? <NavLink to="/buynow"  >

              <Badge badgeContent={account?.carts?.length || 0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
              :
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </NavLink>
          }

          <div className='cursor-pointer flex items-center justify-center py-  hover:border border-white rounded-full my-'>

            {
              account ? <Avatar
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >{account.fname[0].toUpperCase()}</Avatar>
                :
                <Avatar
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>

                </Avatar>
            }




            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >

              <MenuItem onClick={handleClose}>My account</MenuItem>
              {account ? <MenuItem onClick={handleClose}  ><div onClick={logout}><LogoutIcon />Logout</div></MenuItem>
                :
                ""
              }
            </Menu>
          </div>


        </div>
      </nav>
    </header>

  )
}

export default Navbar