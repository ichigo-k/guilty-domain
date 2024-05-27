import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full bg-white shadow-sm sticky top-0 h-[50px] flex items-center  justify-between contain z-50'>

        <h1 className='text-xl font-bold text-green-600'>Guilty<span className=' text-black font-bold'>Domain</span> </h1>
        

        <Link to={"/shop"} className='bg-green-600 flex gap-x-1 p-[5px] rounded-md text-white text-md font-bold hover:bg-green-500 transition-all'>
            Shop Now <ArrowRight />
        </Link>
       
    </div>
  )
}

export default Header