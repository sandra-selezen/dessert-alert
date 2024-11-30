import React from 'react';
import Image from "next/image";

import customer from "/public/images/customer-03.png";

export const HappyCustomer = () => {
  return (
    <div className="container mx-auto bg-pink10 bg-cupcake-pattern bg-top bg-no-repeat bg-cover py-10 lg:py-20 px-4 rounded-[24px]">
      <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">Testimonial</p>
      <h2 className="h2 mb-10 lg:mb-16 text-center">What People Say</h2>
      <div className="max-w-[596px] mx-auto p-8 text-center bg-white rounded-[24px]">
        <Image src={customer} alt="Customer" className="w-14 h-14 mx-auto mb-4 rounded-full border-4 border-white" />
        <h3 className="mb-4 text-lg font-bold">It’s very delicious!</h3>
        <p className="text-black50 text-base/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Amet venenatis a vel id tincidunt volutpat faucibus scelerisque.
          Morbi eget turpis aliquet nunc, varius aliquam ipsum.
        </p>
      </div>
    </div>
  )
}
