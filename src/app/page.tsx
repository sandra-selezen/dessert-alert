import Link from "next/link";
import Image from "next/image";

import appStore from "/public/images/app-store.png";
import googlePlay from "/public/images/google-play.png";
import heroBg from "/public/images/bg-hero-02.png";
import chef from "/public/images/chef.png";
import kid from "/public/images/kid.png";
import blog1 from "/public/images/blog-01.png"; 
import blog2 from "/public/images/blog-02.png"; 
import blog3 from "/public/images/blog-03.png";
import ArrowForward from "../../public/icons/fast-forward-3.svg";
import customer1 from "/public/images/customer-01.png";
import customer2 from "/public/images/customer-02.png";
import customer3 from "/public/images/customer-03.png";
import customer4 from "/public/images/customer-04.png";

import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";
import { PopularMenu } from "@/components/PopularMenu/PopularMenu";
import { HappyCustomer } from "@/components/HappyCustomer/HappyCustomer";
import { categories } from "@/lib/data";

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
              <PrimaryButton href="/menu">Order Now</PrimaryButton>
              <SecondaryButton href="/about">Learn More</SecondaryButton>
            </div>
            <p className="text-black50 text-sm">For Better Service Download Our Mobile App Now</p>
            <div className="flex items-center gap-4 mt-8 lg:mt-16">
              <div className="flex -space-x-4">
                <Image
                  src={customer1}
                  alt="Customer 1"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
                <Image
                  src={customer2}
                  alt="Customer 2"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
                <Image
                  src={customer3}
                  alt="Customer 3"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
                <Image
                  src={customer4}
                  alt="Customer 4"
                  className="w-14 h-14 rounded-full border-4 border-white"
                />
              </div>

              <div>
                <h3 className="text-sm font-bold">Our Happy Customers</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-yellow text-lg">★</span>
                  <p className="text-sm">
                    <span className="font-bold">4.9</span> (12.8k reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 mt-8">
              <Link
                href="#"
                className="block"
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
      <section className="py-20 lg:py-36 px-4">
        <p className="text-center mb-4 text-2xl font-fredoka font-semibold text-pink100">Explore</p>
        <h2 className="h2 text-center mb-10 lg:mb-16">Our Delicious Menu</h2>
        <ul className="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item) => (
            <li
              key={item.id}
              className="w-[260px] h-[260px] flex flex-col items-center p-5 border rounded-2xl border-grey10 hover:border-pink100 hover:cursor-pointer hover:shadow-lg shadow-gray transition"
            >
              <Image src={item.image} width={130} height={130} alt={item.title} className="mb-5" />
              <h3 className="mb-2 font-bold">{item.title}</h3>
              <p className="font-fredoka font-semibold text-pink100">{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container max-w-max mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 pb-20 lg:pb-36 px-4">
        <div className="flex gap-6">
          <div className="overflow-hidden w-[163px] h-[237px] lg:w-[259px] lg:h-[378px] relative -mt-6">
            <Image
              src={chef}
              alt="Chef with rolling pin"
              width={163}
              height={237}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden w-[163px] h-[237px] lg:w-[259px] lg:h-[378px] relative mt-6">
            <Image
              src={kid}
              alt="Kid with donuts"
              width={163}
              height={237}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-lg">
          <p className="mb-4 text-2xl font-fredoka font-semibold text-pink100">About us</p>
          <h2 className="h2 mb-4">Welcome to Fofood</h2>
          <p className="text-black50 text-base/8">
            Welcome to Fofood, where we're committed to combating food deserts.
            Our goal is to ensure everyone has access to fresh, healthy, and affordable food, regardless of their location.
            Join us in creating a brighter future for all.
          </p>
          <SecondaryButton href="/about" clasName="mt-6 inline-block">Read More</SecondaryButton>
        </div>
      </section>
      <section className="pb-20 lg:pb-36 px-4">
        <PopularMenu />
      </section>
      <section className="pb-20 lg:pb-36 px-4">
        <HappyCustomer />
      </section>
      <section className="pb-20 lg:pb-36 px-4">
        <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">Our Blog</p>
        <h2 className="h2 mb-10 lg:mb-16 text-center">Latest Post</h2>
        <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="flex flex-col">
            <Image
              src={blog1}
              width={343}
              height={250}
              alt="Cupcakes"
              className="w-full object-cover"
            />
            <div className="flex-grow flex flex-col justify-between mt-6">
              <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">How To Cook The Sweet Cupcakes with Strawberry Honey</h3>
              <div className="mt-auto"><Link href="#" className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity">Read More <ArrowForward /></Link></div>
            </div>
          </li>
          <li className="flex flex-col">
            <Image
              src={blog2}
              width={343}
              height={250}
              alt="Donuts"
              className="w-full object-cover"
            />
            <div className="flex-grow flex flex-col justify-between mt-6">
              <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">Donut topping recommendations for donut lovers</h3>
              <div className="mt-auto"><Link href="#" className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity">Read More <ArrowForward /></Link></div>
            </div>
          </li>
          <li className="flex flex-col">
            <Image
              src={blog3}
              width={343}
              height={250}
              alt="Macarons"
              className="w-full object-cover"
            />
            <div className="flex-grow flex flex-col justify-between mt-6">
              <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">How To Cook The Sweet Macarons with Strawberry Cream</h3>
              <div className="mt-auto"><Link href="#" className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity">Read More <ArrowForward /></Link></div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
