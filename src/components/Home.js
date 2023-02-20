import React from 'react'
import Sidebar from './Sidebar'
import Products from './Products'
function Home() {
    return (
        <div className='w-full flex justify-evenly '>
            <Sidebar></Sidebar>
            <Products></Products>
        </div>
    )
}

export default Home