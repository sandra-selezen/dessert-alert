import React from 'react';
import Image from "next/image";

import chococheeseCake from "/public/images/chococheese-cake.png";
import pinkDonuts from "/public/images/pink-donuts.png";
import chocoCake from "/public/images/choco-cake.png";
import sweetCake from "/public/images/sweet-cake.png";
import pinkSweet from "/public/images/pink-sweet.png";
import chocoCookies from "/public/images/choco-cookies.png";
import sweetDonuts from "/public/images/sweet-donuts.png";
import sweetChoco from "/public/images/sweet-choco.png";

import { SecondaryButton } from '../Buttons/SecondaryButton';

export const PopularMenu = () => {
  return (
    <>
      <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">Popular Menu</p>
      <h2 className="h2 mb-10 lg:mb-16 text-center">Most Popular Food</h2>
      <ul className="max-w-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        <li className="flex flex-col items-center">
          <Image src={chococheeseCake} width={150} height={150} alt="Chococheese Cake" className="mb-3" />
          <h3 className="mb-2 font-bold">Chococheese Cake</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.5</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={pinkDonuts} width={150} height={150} alt="Pink Donuts" className="mb-3" />
          <h3 className="mb-2 font-bold">Pink Donuts</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.8</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={chocoCake} width={150} height={150} alt="Choco Cake" className="mb-3" />
          <h3 className="mb-2 font-bold">Choco Cake</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.9</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={sweetCake} width={150} height={150} alt="Sweet Cake" className="mb-3" />
          <h3 className="mb-2 font-bold">Sweet Cake</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.3</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={pinkSweet} width={150} height={150} alt="Pink Sweet" className="mb-3" />
          <h3 className="mb-2 font-bold">Pink Sweet</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.1</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={chocoCookies} width={150} height={150} alt="Choco Cookies" className="mb-3" />
          <h3 className="mb-2 font-bold">Choco Cookies</h3>
          <span className="font-fredoka font-semibold text-pink100">$2.8</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={sweetDonuts} width={150} height={150} alt="Sweet Donuts" className="mb-3" />
          <h3 className="mb-2 font-bold">Sweet Donuts</h3>
          <span className="font-fredoka font-semibold text-pink100">$1.8</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src={sweetChoco} width={150} height={150} alt="Sweet Choco" className="mb-3" />
          <h3 className="mb-2 font-bold">Sweet Choco</h3>
          <span className="font-fredoka font-semibold text-pink100">$3.6</span>
        </li>
      </ul>
      <div className="max-w-max mx-auto mt-10 lg:mt-20">
        <SecondaryButton href="/menu" clasName="inline-block">See All Menu</SecondaryButton>
      </div>
    </>
  )
}
