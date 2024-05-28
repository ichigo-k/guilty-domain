import React from 'react'
import shirtImage from "../../assets/images/shirt2.png"
import {ShoppingBag } from 'lucide-react'
import {Link} from "react-router-dom"

function Hero() {
  return (
    <div className='bg-gray-100'>
        <div className='contain flex max-md:flex-col '>
        <div className='lg:w-1/2 w-full'>
            <div className='w-fit text-5xl max-lg:text-3xl md max-md:text-center text-gray-800 tracking-tight leading-tight font-bold  mt-10 text-left md:ml-10 text-balance max-md:mt-4 '>
            Premium Outfits Made  in <span className='text-green-600 '>GHANA</span>
            <p className='mt-4 text-lg text-gray-500 md:pr-10 max-w-prose text-center md:text-left font-semibold'>
              Our apparel is meticulously crafted from the finest 
              <span className='text-green-500'> materials</span> and engineered for 
              <span className='text-green-500'> durability</span>.
          </p>

          <div className='w-full max-md:flex justify-center'>
          <Link to={"/shop"}>
                <button  className='  bg-green-600 p-2 text-white rounded-lg text-2xl flex justify-center items-center gap-x-2 xl:mt-5 mt-5 max-xl:mb-10 animate-bounce'>
                Shop Now <ShoppingBag className='font-bold '/>
                </button>
            </Link>
          </div>
           
           
            
            </div>

           
        </div>
        <div className='lg:w-1/2 w-full flex justify-center  '>
          <img src={shirtImage} alt="" className='w-full object-cover'/>
        </div>
    </div>
    </div>
  )
}

export default Hero