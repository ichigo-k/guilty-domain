import { Check, Star } from 'lucide-react'
import React from 'react'

import user1 from "../../assets/images/user-1.png"
import user2 from "../../assets/images/user-2.png"
import user3 from "../../assets/images/user-3.png"
import user4 from "../../assets/images/user-4.jpg"
import user5 from "../../assets/images/user-5.jpg"

function SubHero() {
  return (
    <div className='contain w-full bg-green-100 flex justify-center max-md:flex-col   '>
        <div className="md:w-1/2 w-full flex justify-center mt-[1rem] ">
            <ul>
                <li className='flex gap-2 text-lg h-5 items-center mb-3 '>
                    <Check className='size-5 shrink-0 text-green-600'/> Quality and affordable
                </li>
                <li className='flex gap-2 text-lg h-5 items-center  mb-3'>
                    <Check className='size-5 shrink-0 text-green-600'/> High quality, durable material
                </li>
                <li className='flex gap-2 text-lg h-5 items-center mb-3'>
                    <Check className='size-5 shrink-0 text-green-600'/> 5years warranty 
                </li>
            </ul>
        </div>

        <div className="md:w-1/2 w-full flex justify-center mt-[1rem]">
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4 '>
                    <img src={user1} alt="" className='inline-block size-10 rounded-full ring-2 ring-slate-100'/>
                    <img src={user2} alt="" className='inline-block size-10 rounded-full ring-2 ring-slate-100'/>
                    <img src={user3} alt="" className='inline-block size-10 rounded-full ring-2 ring-slate-100'/>
                    <img src={user4} alt="" className='inline-block size-10 rounded-full ring-2 ring-slate-100'/>
                    <img src={user5} alt="" className='inline-block object-cover size-10 rounded-full ring-2 ring-slate-100'/>
                </div>


                <div className='flex flex-col justify-between sm:items-start items-center '>
                        <div className='flex gap-0.5'>
                            <Star className='size-5 text-green-600 fill-green-600'/>
                            <Star className='size-5 text-green-600 fill-green-600'/>
                            <Star className='size-5 text-green-600 fill-green-600'/>
                            <Star className='size-5 text-green-600 fill-green-600'/>
                            <Star className='size-5 text-green-600 fill-green-600'/>
                            
                        </div>

                        <h1 className='text-2xl font-bold text-green-600'>Happy Customers</h1>
                        <p className='text-gray-500 mb-5'>We have over 10,000 happy customers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubHero