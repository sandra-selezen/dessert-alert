"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import HeartIcon from "../../../public/icons/favorite.svg";

import { PrimaryButton } from "../Buttons/PrimaryButton";

interface IMenuItem {
  item: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  }
}

export const MenuItem = ({ item }: IMenuItem) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((cartItem: any) => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ item, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const existingItem = favorites.find((favorite: any) => favorite.id === item.id);
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
      <div className="basis-1/2">
        <Image src={item.image} width={343} height={343} alt={item.name} className="mx-auto w-full h-auto lg:w-[522px]" />
      </div>
      <div className="basis-1/2">
        <h1 className="mb-4 lg:mb-8 font-bold text-4xl lg:text-6xl">{item.name}</h1>
        <p className="font-bold text-2xl mb-1">Price</p>
        <span className="font-fredoka font-semibold text-xl text-pink100">${item.price}</span>
        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2">Description</h3>
          <p className="text-black50 text-base/8">
            From classic favorites to unique creations, our cake menu at Fofood offers a delectable selection of sweet treats that will satisfy your cravings.
            Indulge in moist and fluffy vanilla cake, rich chocolate ganache cake, refreshing lemon berry cake, tropical mango passion cake, and more.
            With options available for various dietary preferences, including vegan and gluten-free choices, everyone can enjoy our irresistible cakes.
            Whether you're celebrating a special occasion or simply treating yourself, our cakes are made with the finest ingredients and expert craftsmanship.
            Discover the joy of our sweet creations and let our cakes be the highlight of your sweet moments.
          </p>
        </div>
        <div className="my-6 flex items-center">
          <h3 className="font-bold text-2xl mr-3">Quantity:</h3>
          <div className="flex">
            <button
              className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <span className="text-2xl">-</span>
            </button>
            <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">{quantity}</span>
            <button
              className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
              onClick={increaseQuantity}
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <PrimaryButton
            type="button"
            onClick={addToCart}
            clasName="flex-1"
          >
            Add to Cart
          </PrimaryButton>
          <button
            type="button"
            onClick={addToFavorites}
            className="p-2 w-[60px] h-[60px] flex justify-center items-center rounded-full bg-transparent border border-solid border-pink100"
          >
            <HeartIcon />
          </button>
        </div>
      </div>
    </>
  )
}
