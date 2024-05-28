import React from 'react'
import { Link } from 'react-router-dom'
import shirt5 from "../../assets/images/shirt4.png"

function Cta() {
  return (
    <div className='contain w-full bg-[#001219]'>
      <div className='w-full flex items-center justify-center max-md:flex-col-reverse '>

        <div className='p-4 flex flex-col gap-y-2 w-1/2 max-md:w-full'>
          <h2 className='text-white font-bold w-[20rem] text-3xl max-md:text-center'>Upgrade Your Wardrobe with Our <span className='text-green-500'>New  Collection!</span></h2>
          <p className='text-gray-400 text-xl w-[25rem] max-md:text-center max-md:w-[20rem]'>Don’t miss out on exclusive designs and premium quality. Shop now and transform your style.</p>
         <Link to={"/shop"}>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md w-[10rem] max-md:w-full mt-2'>Shop Now</button>
         </Link>
        </div>


        <div  className='w-1/2 max-md:w-full'>
          <img src={shirt5} alt="cta"  className='w-full' />
        </div>
      </div>

    </div>
  )
}

export default Cta