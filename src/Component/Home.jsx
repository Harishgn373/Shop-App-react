import React from 'react';
import { createContext } from "react";

const myContext = createContext();
export default function Home() {
  return (
    <>
        <div className='w-[100%] lg:h-[100vh] h-[93vh]  flex  items-center flex-col '>
            <div className='w-[85%] lg:h-[100px] h-[200px] text-center  flex justify-around items-center flex-col '>
                <p className='text-4xl font-bold'>Welcome to the Online Store</p>
                <p>Choose a category from the navigation to start shopping!</p>
            </div>
            <div className='w-[85%] lg:h-[305px] h-[250px]  lg:p-0 py-20 '>
                <img src="/mens_tshirts.jpg" alt="mens"/>
            </div>
            <div className='w-[85%] lg:h-[300px] '>
                <img src="/ladies_outerwear.jpg" alt="ladies" />
            </div>
        </div>
    </>
  )
}
export  {myContext};