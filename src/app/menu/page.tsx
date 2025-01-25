"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { menu } from "@/lib/data";

import { Categories } from "@/components/Categories/Categories";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? menu
      : menu.filter((product) => product.category === selectedCategory);

  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ Menu</span></p>
          <h1 className="h1">Our Menu</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-36">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          <div className="basis-1/4">
            <h3 className="mb-6 text-black50 font-bold text-2xl">Categories</h3>
            <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>
            {/* <div>Banner</div> */}
          </div>

          <div className="basis-3/4">
            <div className="flex justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold">All Menu</h2>
              <p className="font-fredoka font-semibold text-xl text-pink100">200 Menu</p>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
              {filteredProducts.map((item) => (
                <li key={item.id} className="flex flex-col items-center">
                  <Image src={item.image} width={200} height={200} alt={item.name} className="mb-3" />
                  <Link href={`/menu/${item.id}`} className="mb-2 font-bold hover:text-pink100 hover:underline transition-all">{item.name}</Link>
                  <span className="font-fredoka font-semibold text-pink100">${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MenuPage;
