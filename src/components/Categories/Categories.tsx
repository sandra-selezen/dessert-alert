import React from "react";
import Image from "next/image";

import MenuIcon from "../../../public/icons/category.svg";
import { categories } from "@/lib/data";

export const Categories = () => {
  return (
    <ul className="flex md:flex-col gap-4 max-[767px]:overflow-x-scroll">
      <li className="flex flex-shrink-0 basis-['calc((100%-96px)/7)'] gap-3 items-center p-4 rounded-2xl border border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
        <div className="w-[56px] h-[56px] flex justify-center items-center"><MenuIcon /></div>
        <div>
          <h3 className="mb-1 font-bold text-base">All</h3>
          <p className="font-fredoka font-semibold text-pink100 text-sm">200 Menu</p>
        </div>
      </li>
      {categories.map((item) => (
        <li
          key={item.id}
          className="flex flex-shrink-0 basis-['calc((100%-96px)/7)'] gap-3 items-center p-4 rounded-2xl border border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
          <div>
            <Image src={item.image} width={56} height={56} alt={item.title} />
          </div>
          <div>
            <h3 className="mb-1 font-bold text-base">{item.title}</h3>
            <p className="font-fredoka font-semibold text-pink100 text-sm">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
