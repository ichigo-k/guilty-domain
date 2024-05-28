import React from 'react';
import shirt3 from "../../assets/images/shirt3.png";
import trouser1 from "../../assets/images/trouser1.png";
import short2 from "../../assets/images/short2.png";

function FeaturedProducts() {
  return (
    <div className='contain w-full bg-gray-100'>
      <div className='w-full flex gap-x-4 p-4 max-md:overflow-x-auto snap-x snap-mandatory no-scrollbar md:justify-center'>

        <div className="snap-start flex-shrink-0 w-1/4 max-md:w-[80%] shadow-md rounded-md bg-yellow-100 mt-5 relative">
          <img src={shirt3} alt="product" className="w-full object-cover" />
          <div className="absolute top-4 left-0 right-0 bg-yellow-400 p-2 w-[9rem] rounded-r-full text-white font-semibold">
            Featured Product
          </div>
        </div>

        <div className="snap-start flex-shrink-0 w-1/4 max-md:w-[80%] shadow-md rounded-md bg-red-100 mt-5 relative">
          <img src={trouser1} alt="product" className="w-full object-cover" />
          <div className="absolute top-4 left-0 right-0 bg-red-400 p-2 w-[9rem] rounded-r-full text-white font-semibold">
            Featured Product
          </div>
        </div>

        <div className="snap-start flex-shrink-0 w-1/4 max-md:w-[80%] shadow-md rounded-md bg-violet-100 mt-5 relative">
          <img src={short2} alt="product" className="w-full object-cover" />
          <div className="absolute top-4 left-0 right-0 bg-violet-400 p-2 w-[9rem] rounded-r-full text-white font-semibold">
            Featured Product
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
