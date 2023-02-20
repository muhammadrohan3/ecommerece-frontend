import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShopIcon from '@mui/icons-material/Shop';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    <div>
        <div className='w-full grid md:grid-cols-2 border drop-shadow mt-10'>
            <div className='cursor-pointer w-full md:w-[45%] p-10'>
                <h1 className='text-3xl font-sans text-orange-500'>MR3 Store</h1>
                <h2 className='text-xl hover:underline hover:text-orange-500 text-slate-600 '>Home</h2>
                <h2 className='text-xl hover:underline hover:text-orange-500 text-slate-600 '>Store</h2>
                <h2 className='text-xl hover:underline hover:text-orange-500 text-slate-600 '>About</h2>
                <h2 className='text-xl hover:underline hover:text-orange-500 text-slate-600 '>Help</h2>
            </div>
            <div className='w-full md:w-[45%] text-3xl flex flex-col p-10'>
                <div>
                    <h1 className='text-3xl font-sans text-orange-500'>Follow Us</h1>
                </div>
                <div className='flex py-5 justify-between'>
                    <InstagramIcon className=' cursor-pointer text-red-400' sx={{fontSize : "30px"}}></InstagramIcon>
                    <FacebookIcon className=' cursor-pointer text-blue-500' sx={{fontSize : "30px"}}></FacebookIcon>
                    <ShopIcon className=' cursor-pointer text-green-500' sx={{fontSize : "30px"}}></ShopIcon>
                    <LinkedInIcon className=' cursor-pointer text-blue-400' sx={{fontSize : "30px"}}></LinkedInIcon>
                    <WhatsAppIcon className=' cursor-pointer text-green-400' sx={{fontSize : "30px"}}></WhatsAppIcon>
                </div>
                
            </div>
        </div>
        <div className='w-full bg-orange-500 text-white text-center'>
            All Rights Reserved 2023 | MR3 Store
        </div>
    </div>
  )
}

export default Footer