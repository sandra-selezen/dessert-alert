"use client";

import React, { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { categories, menu } from "@/lib/data";

import { Categories, ICategory } from "@/components/Categories/Categories";

const MenuContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category") || "all";

  const selectedCategory = useMemo(() => {
    return categories.find((c) => c.category === categoryParam) || categories[0];
  }, [categoryParam]);

  const handleSelectCategory = (item: ICategory) => {
    const params = new URLSearchParams(window.location.search);
    params.set("category", item.category);
    router.replace(`/menu?${params.toString()}`);
  };

  const filteredProducts =
    selectedCategory.category === "all"
      ? menu
      : menu.filter((product) => product.category === selectedCategory.category);

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
            <Categories selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory}/>
          </div>

          <div className="basis-3/4">
            <div className="flex justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold">{selectedCategory.title}</h2>
              <p className="font-fredoka font-semibold text-xl text-pink100">{selectedCategory.subtitle}</p>
            </div>
            {filteredProducts.length > 0
              ? (
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                  {filteredProducts.map((item) => (
                    <li key={item.id} className="flex flex-col items-center">
                      <Image src={item.image} width={200} height={200} alt={item.name} className="mb-3" />
                      <Link href={`/menu/${item.id}`} className="mb-2 font-bold hover:text-pink100 hover:underline transition-all">{item.name}</Link>
                      <span className="font-fredoka font-semibold text-pink100">${item.price}</span>
                    </li>
                  ))}
                </ul>
              )
              : (
                <p>This menu is currently empty. We're cooking up something delicious!</p>
              )
            }
          </div>
        </div>
      </section>
    </main>
  )
}

const MenuPage = () => {
  return (
    <Suspense fallback={<div>Loading menu...</div>}>
      <MenuContent />
    </Suspense>
  );
};

export default MenuPage;
