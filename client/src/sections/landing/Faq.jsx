
import React from 'react'
import Accordian from '../../components/Accordian'

function Faq() {

  return (
    <div className='w-full contain  flex justify-center'>
      <div className='w-full flex  items-center p-3 flex-col gap-y-3'>
        <h1 className='text-3xl font-bold'>How can we <span className='text-green-600'>help</span> ?</h1>


        <div className='p-4 bg-white rounded-lg w-full shadow-md mb-2 divide-y-2'>
         <Accordian question={"What sizes do you offer?"} answer={"We offer a wide range of sizes from XS to XXL. Please refer to our size chart for specific measurements."} />

         <Accordian question={"How can I find the right size?"} answer={"Use our detailed size chart available on each product page. If you're between sizes, consider the fit of the garment—looser or tighter—and choose accordingly."} />

         <Accordian question={"How do I place an order?"} answer={"Browse our collection, select your preferred items, choose the size and color, and click 'Add to Cart'. When you’re ready, proceed to checkout."} />

         <Accordian question={"How long will it take for my order to arrive?"} answer={"Standard shipping typically takes 5-7 business days. Expedited shipping options are available at checkout."} />

         <Accordian question={"How can I track my order?"} answer={"Once your order ships, you will receive a shipping confirmation email with a tracking number. Use this number to track your order on our website."} />

         <Accordian question={"Are your products ethically made?"} answer={"Yes, we are committed to ethical manufacturing practices and ensure all our products are made in fair and safe conditions."} />

         
        </div>
      </div>
    </div>
  )
}

export default Faq