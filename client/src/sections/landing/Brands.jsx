import React from 'react';
import nike from "../../assets/images/nike.png";
import adidas from "../../assets/images/adidas.png";
import walmart from "../../assets/images/walmart.svg";
import coty from "../../assets/images/coty.svg";
import bal from "../../assets/images/balenciaga.svg";
import brooks from "../../assets/images/brooks.svg";

function Brands() {
  return (
    <div className='w-full p-4 contain flex flex-col justify-center items-center bg-white'>
      <h1 className='font-bold text-3xl'>In <span className='text-green-600'>Collaboration</span> With: </h1>

      <div className='w-full p-2 flex justify-center  '>
        <div className='grid gap-3 xl:grid-cols-6 xl:grid-rows-1 grid-cols-3 grid-rows-2 mx-auto  max-md:overflow-x-scroll no-scrollbar  max-md:gap-x-[11rem] py-3'>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={nike} alt="Nike" className='object-cover relative w-full h-[5rem] p-2' />
          </div>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={adidas} alt="Adidas" className='relative w-full h-[5rem] p-2' />
          </div>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={walmart} alt="Walmart" className='relative w-full h-[5rem] object-cover p-2' />
          </div>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={coty} alt="Coty" className='relative w-full h-[5rem] object-fit p-2' />
          </div>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={bal} alt="Balenciaga" className='relative w-full h-[5rem] object-fit p-2' />
          </div>
          <div className='w-[10rem] h-[5rem] shadow-md rounded-md flex justify-center items-center relative bg-white'>
            <img src={brooks} alt="Brooks" className='relative w-full h-[5rem] object-fit p-2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
