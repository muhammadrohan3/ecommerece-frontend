import React from 'react'
import Card from './Card'
const dummyData = [
    {
        name: "Test name 1",
        price: 1000,
        available: 10,
    },
    {
        name: "Test name 2",
        price: 2000,
        available: 20,
    },
    {
        name: "Test name 3",
        price: 3000,
        available: 30,
    },
    {
        name: "Test name 5",
        price: 5000,
        available: 50,
    },
    {
        name: "Test name 5",
        price: 5000,
        available: 50,
    },
]

function products() {
    return (
        <div className = 'w-[75%] mx-5'>
            <h1 className='text-2xl font-bold py-5' >Products</h1>
            <div className='w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center border border-black '>
                {
                    dummyData.map((item) => {
                        return (
                            <Card></Card>)
                    })
                }
            </div>
        </div>
    )
}

export default products