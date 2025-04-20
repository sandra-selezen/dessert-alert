import React from "react";
import Image, { StaticImageData } from "next/image";

import { categories } from "@/lib/data";

export interface ICategory {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: StaticImageData;
}

interface ICategories {
  selectedCategory: ICategory;
  onSelectCategory: (item: ICategory) => void;
}

export const Categories = ({ selectedCategory, onSelectCategory }: ICategories) => {
  return (
    <ul className="flex md:flex-col gap-4 max-[767px]:overflow-x-scroll">
      {categories.map((item) => (
        <li
          key={item.id}
          className={`${selectedCategory.category === item.category ? "border-pink100 shadow-lg shadow-gray" : ""} flex flex-shrink-0 basis-['calc((100%-96px)/7)'] gap-3 items-center p-4 rounded-2xl border border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition`}
          onClick={() => onSelectCategory(item)}
        >
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
