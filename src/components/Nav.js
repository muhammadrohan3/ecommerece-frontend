import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

import logo from '../Assets/logo.png'
function Nav() {
  return (
    <div className='w-full flex justify-between items-center border drop-shadow	bg-white'>
        <div className='mx-10 w-[100px]'>
            <img className='w-[80%] cursor-pointer' src={logo} alt="" />
        </div>
        <div className='p-5 cursor-pointer'>
            <IconButton size='large' >
            <ShoppingCartIcon className='text-orange-500' sx={{fontSize : "30px"}} ></ShoppingCartIcon>
            </IconButton>
        </div>
    </div>
  )
}

export default Nav