import Link from "next/link";
import Image from "next/image";

import appStore from "../../public/images/app-store.png";
import googlePlay from "../../public/images/google-play.png";
import heroBg from "../../public/images/bg-hero-02.png";

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
    </main>
  );
}
