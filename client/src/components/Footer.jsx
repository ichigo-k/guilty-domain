import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function Footer() {

  const currentYear = new Date()
  return (
    <div className='contain p-4 flex flex-col bg-black '>
      <div className='w-full flex items-center flex-col gap-y-4'>

        <div className='text-3xl text-white font-bold'>
          Follow <span className='text-green-500'>Us</span>:
        </div>

        <div className='w-full flex justify-center gap-x-4'>
          <span className='bg-green-500 p-2 rounded-full text-white'>
            <Twitter />
          </span>

          <span className='bg-green-500 p-2 rounded-full text-white'>
            <Facebook/>
          </span>

          <span className='bg-green-500 p-2 rounded-full text-white'>
           <Instagram/>
          </span>
          
          <span className='bg-green-500 p-2 rounded-full text-white'>
            <Youtube/>
          </span>
          
        </div>
        <div>
          <h2 className='text-white font-bold text-2xl'>Guilty<span className='text-green-500'>Domain</span></h2>
        </div>

        <div>
          <p className='text-gray-400'>© {currentYear.getFullYear()} GuiltyDomain. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer