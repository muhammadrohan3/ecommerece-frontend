import React from 'react'
import img1 from '../Assets/img1.jpg'
import {useNavigate} from 'react-router-dom'
function Card() {
  const navigate = useNavigate()
  return (
    <div className=' bg-slate-100 border rounded m-2 p-2 flex items-center flex-col cursor-pointer' onClick = {()=>navigate("/product")}>
        <div className='w-[98%] rounded flex justify-center align-center ' >
            <img className='w-full rounded' src= {img1} alt="" />
        </div>
        <div className='w-[98%]'>
            <h1 className='text-lg '>Product Title</h1>
            <h2 className='text-orange-500'>12,000 PKR</h2>
            <h3 className='text-sm'><span className='text-xs line-through text-gray-400'>15,000 PKR</span> 45%</h3>
        </div>
    </div>
  )
}

export default Card