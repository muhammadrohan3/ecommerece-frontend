import React , {useState} from 'react'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

function ImageSlider() {
    const images = [img1 , img2 , img3 , img4]
    const [no, setNo] = useState(0)
    const [image , setImage] = useState(img1)
    const next = () =>{
         if(no < images.length-1){
             setNo(no+1)
             setImage(images[no+1])
         }
         else{
             setNo(0)
             setImage(images[0])
         }
    }
    const previous = () =>{
        if(no > 0){
            setNo(no-1)
            setImage(images[no-1])
        }
        else{
            setNo(images.length-1)
            setImage(images[images.length-1])

        }
    }
  return (
    <div className='md:w-[512px] h-[260px] border m-10 border-black'>
        <div className=' w-full relative flex justify-center items-start bg-slate-100'>
            <img className = 'm-0 h-[256px]' src={image} alt="" />
            <div className='absolute left-0 top-[45%]' onClick = {()=>{previous()}}>
                <IconButton><ChevronLeftIcon></ChevronLeftIcon></IconButton>
            </div>
            <div className='absolute right-0 top-[45%]' onClick={()=>next()}>
                <IconButton><ChevronRightIcon></ChevronRightIcon></IconButton>
            </div>
        </div>
        
    </div>
  )
}

export default ImageSlider