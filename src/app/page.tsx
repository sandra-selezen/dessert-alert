import Link from "next/link";
import Image from "next/image";

import appStore from "/public/images/app-store.png";
import googlePlay from "/public/images/google-play.png";
import heroBg from "/public/images/bg-hero-02.png";
import cake from "/public/images/cake.png";
import cupcake from "/public/images/cupcake.png";
import donut from "/public/images/donut.png";
import cookie from "/public/images/cookie.png";
import macaron from "/public/images/macaron.png";
import drink from "/public/images/drink.png";


import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";

export default function Home() {
  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-12 md:py-20 px-4">
          <div>
            <p className="mb-2 text-2xl font-fredoka font-semibold text-pink100">Welcome to Fofood</p>
            <h1 className="h1 mb-6">Super Delichious Food Special for You</h1>
            <p className="text-black50 text-lg">Order your favorites food from anywhere and get delivery at your door</p>
            <div className="my-8 flex gap-x-4">
              <PrimaryButton type="button">Order Now</PrimaryButton>
              <SecondaryButton type="button">Learn More</SecondaryButton>
            </div>
            <p className="text-black50 text-sm">For Better Service Download Our Mobile App Now</p>
            <div className="flex gap-x-4 mt-8">
              <Link
                href="#"
                className="block mb-6"
                aria-label="Google Play"
              >
                <Image src={googlePlay} width={145} height={44} alt="Google Play" className="w-40" />
              </Link>
              <Link
                href="#"
                className="block"
                aria-label="App Store"
              >
                <Image src={appStore} width={145} height={44} alt="App Store" className="w-40" />
              </Link>
            </div>
          </div>

          <div>
            <Image src={heroBg} height={722} width={690} alt="cupcake" />
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-36">
        <p className="text-center mb-4 text-2xl font-fredoka font-semibold text-pink100">Explore</p>
        <h2 className="h2 text-center">Our Delicious Menu</h2>
        <ul className="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={cake} width={130} height={130} alt="cake" className="mb-5" />
            <h3 className="mb-2 font-bold">Cakes</h3>
            <p className="font-fredoka font-semibold text-pink100">24 Menu</p>
          </li>
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={cupcake} width={130} height={130} alt="cupcake" className="mb-5" />
            <h3 className="mb-2 font-bold">Cupcakes</h3>
            <p className="font-fredoka font-semibold text-pink100">25 Menu</p>
          </li>
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={donut} width={130} height={130} alt="donut" className="mb-5" />
            <h3 className="mb-2 font-bold">Donuts</h3>
            <p className="font-fredoka font-semibold text-pink100">35 Menu</p>
          </li>
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={cookie} width={130} height={130} alt="cookie" className="mb-5" />
            <h3 className="mb-2 font-bold">Cookies</h3>
            <p className="font-fredoka font-semibold text-pink100">24 Menu</p>
          </li>
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={macaron} width={130} height={130} alt="macaron" className="mb-5" />
            <h3 className="mb-2 font-bold">Macarons</h3>
            <p className="font-fredoka font-semibold text-pink100">25 Menu</p>
          </li>
          <li className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition">
            <Image src={drink} width={130} height={130} alt="drink" className="mb-5" />
            <h3 className="mb-2 font-bold">Drinks</h3>
            <p className="font-fredoka font-semibold text-pink100">22 Menu</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
