import React from 'react';
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png"; // Assume there's a third user image

function Testimonial() {
  return (
    <div className='contain bg-gray-200 w-full flex justify-center p-4 flex-col items-center'>
      <h1 className='text-3xl font-bold w-[20rem] text-center'>What Our <span className='text-green-600'>Customers</span> Say</h1>

      <div className='mt-4 flex w-full gap-4  mb-4 p-2 max-md:flex-col'>
        <div className='w-1/3 bg-white rounded-lg shadow-md p-4 max-md:w-full flex flex-col items-center'>
          <img src={user1} alt="User 1" className='rounded-full w-24 h-24 mb-4'/>
          <p className='text-xl font-semibold'>John Doe</p>
          <p className='text-gray-600 italic'>"The quality of the clothes is amazing! I've never felt more comfortable and stylish. Highly recommend!"</p>
        </div>

        <div className='w-1/3 bg-white rounded-lg shadow-md p-4 max-md:w-full flex flex-col items-center'>
          <img src={user2} alt="User 2" className='rounded-full w-24 h-24 mb-4'/>
          <p className='text-xl font-semibold'>Jane Smith</p>
          <p className='text-gray-600 italic'>"Excellent customer service and fast delivery. The clothes fit perfectly and are of great quality."</p>
        </div>

        <div className='w-1/3 bg-white rounded-lg shadow-md p-4 max-md:w-full flex flex-col items-center max-md:hidden'>
          <img src={user3} alt="User 3" className='rounded-full w-24 h-24 mb-4'/>
          <p className='text-xl font-semibold'>Emily Johnson</p>
          <p className='text-gray-600 italic'>"I love the variety and the unique styles available. The fabrics are top-notch and so comfortable!"</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
