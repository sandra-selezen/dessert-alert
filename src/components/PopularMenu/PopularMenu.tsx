"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import HeartIcon from "../../../public/icons/favorite.svg";
import CartIcon from "../../../public/icons/buy.svg";
import { popularMenu } from "@/lib/data";
import { ICart } from "@/app/cart/page";
import { SecondaryButton } from "../Buttons/SecondaryButton";

interface IMenuItem {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

export const PopularMenu = () => {

  const addToCart = (item: IMenuItem) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((cartItem: ICart) => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const addToFavorites = (item: IMenuItem) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const existingItem = favorites.find((favorite: IMenuItem) => favorite.id === item.id);
    if (!existingItem) {
      favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to Favorites!");
    } else {
      alert("This item is already in Favorites!");
    }
  };

  return (
    <>
      <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">Popular Menu</p>
      <h2 className="h2 mb-10 lg:mb-16 text-center">Most Popular Food</h2>
      <ul className="max-w-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {popularMenu.map((item) => (
          <li key={item.id} className="menu-item">
            <Image src={item.image} width={150} height={150} alt={item.name} className="mb-3" />
            <Link href={`/menu/${item.id}`} className="mb-2 font-bold">{item.name}</Link>
            <span className="font-fredoka font-semibold text-pink100">${item.price}</span>
            <div className="button-wrapper">
              <button
                onClick={() => addToFavorites(item)}
                className="p-2 flex justify-center items-center rounded-full bg-transparent border border-solid border-pink100"
              >
                <HeartIcon />
              </button>
              <button
                onClick={() => addToCart(item)}
                className="flex justify-center items-center rounded-full py-3 px-5 md:px-10 bg-pink100 text-white hover:shadow-lg shadow-pink transition-shadow font-medium"
              >
                <span className="md:hidden"><CartIcon className="fill-white" /></span>
                <span className="hidden md:block">Add to Cart</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="max-w-max mx-auto mt-10 lg:mt-20">
        <SecondaryButton href="/menu" className="inline-block">See All Menu</SecondaryButton>
      </div>
    </>
  )
}
