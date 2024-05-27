import React from 'react'
import nike from "../../assets/images/nike.png"
import adidas from "../../assets/images/adidas.png"
import walmart from "../../assets/images/walmart.svg"
import coty from "../../assets/images/coty.svg"
import bal from "../../assets/images/balenciaga.svg"
import brooks from "../../assets/images/brooks.svg"

function Brands() {
  return (
    <div className='w-full p-4 contain flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl'>In <span className='text-green-600'>Collaboraton</span> With : </h1>

        <div class='w-full p-2 flex justify-center'>
    <div class='grid gap-3 xl:grid-cols-6 xl:grid-rows-1 md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 mx-auto'>
        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={nike} alt="" class='object-cover relative w-full h-[5rem] p-2'/>
        </div>

        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={adidas} alt="" class='relative w-full h-[5rem] p-2'/>
        </div>

        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={walmart} alt="" class='relative w-full h-[5rem] object-cover p-2'/>
        </div>

        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={coty} alt="" class='relative w-full h-[5rem] object-fit p-2'/>
        </div>

        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={bal} alt="" class='relative w-full h-[5rem] object-fit p-2'/>
        </div>

        <div class='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative'>
            <img src={brooks} alt="" class='relative w-full h-[5rem] object-fit p-2'/>
        </div>
    </div>
</div>


    </div>
  )
}

export default Brands