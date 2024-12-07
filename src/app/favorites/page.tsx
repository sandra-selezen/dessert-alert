"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import HeartIcon from "../../../public/icons/favorite.svg";
import HeartIconFull from "../../../public/icons/favorite-full.svg";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";

interface IFavorite {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites) setFavorites(favorites);
  }, []);

  const removeFromFavorites = (itemId: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.filter((favorite: IFavorite) => favorite.id !== itemId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    // alert("Item removed from Favorites!");
  };

  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ Favorites</span></p>
          <h1 className="h1">My Favorites</h1>
        </div>
      </section>
      <section className="container mx-auto py-20 lg:py-36 px-4">
        {favorites.length ? (
          <ul className="max-w-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
            {favorites.map((item: IFavorite) => (
              <li key={item.id} className="flex items-center flex-col relative">
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="w-[40px] h-[40px] p-1 flex justify-center items-center rounded-full bg-transparent border border-solid border-pink100 absolute right-0"
                >
                  <HeartIconFull />
                </button>
                <Image src={item.image} width={150} height={150} alt={item.name} className="mb-3" />
                <Link href={`/menu/${item.id}`} className="mb-2 font-bold">{item.name}</Link>
                <span className="font-fredoka font-semibold text-pink100">${item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Your Sweet Indulgences Await!</h2>
            <p className="text-black50 text-base/8 mb-6">Welcome to your favorites page! Here, you can keep track of all your beloved desserts from our delectable selection.
              Whether you have a soft spot for chocolatey treats, crave creamy delights, or savor fruity delicacies, this is the place to save and organize your favorites.
              Simply click the heart icon next to the desserts you love, and they'll be stored here for quick access whenever your sweet tooth strikes.
            </p>
            <SecondaryButton href="/menu" className="inline-block">Explore Irresistible Desserts</SecondaryButton>
          </div>
        )}
      </section>
    </main>
  )
}

export default FavoritesPage;
