import React from "react";
import Image from "next/image";

import MenuIcon from "../../../public/icons/category.svg";
import cake from "/public/images/cake.png";
import cupcake from "/public/images/cupcake.png";
import donut from "/public/images/donut.png";
import cookie from "/public/images/cookie.png";
import macaron from "/public/images/macaron.png";
import drink from "/public/images/drink.png";

export const Categories = () => {
  return (
    <ul className="flex md:flex-col gap-4">
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div className="w-[56px] h-[56px] flex justify-center items-center"><MenuIcon /></div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">All</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">200 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={cake} width={56} height={56} alt="cake" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">Cakes</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">24 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={cupcake} width={56} height={56} alt="cupcake" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">Cupcakes</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">25 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={donut} width={56} height={56} alt="donut" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">Donuts</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">35 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={cookie} width={56} height={56} alt="cookie" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">Cookies</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">24 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={macaron} width={56} height={56} alt="macaron" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">Macarons</h3>
          <p className="font-fredoka font-semibold text-pink100 text-xl">25 Menu</p>
        </div>
      </li>
      <li className="flex gap-3 items-center p-4 rounded-2xl border border-grey10">
        <div>
          <Image src={drink} width={56} height={56} alt="drink" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-lg">Drinks</h3>
          <p className="font-fredoka font-semibold text-pink100 text-base">22 Menu</p>
        </div>
      </li>
    </ul>
  )
}
