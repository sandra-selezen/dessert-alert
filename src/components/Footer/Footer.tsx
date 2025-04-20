import Link from "next/link";
import Image from "next/image";

import logoWhite from "../../../public/images/logo-white.png";
import appStore from "../../../public/images/app-store.png";
import googlePlay from "../../../public/images/google-play.png";
import CallIcon from "../../../public/icons/call.svg";
import MailIcon from "../../../public/icons/message.svg";
import Timeicon from "../../../public/icons/time-circle.svg";
import FacebookIcon from "../../../public/icons/facebook.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import WhatsappIcon from "../../../public/icons/whatsapp.svg";

import { SubscribeForm } from "../Forms/SubscribeForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="flex items-center flex-col gap-y-6 lg:flex-row lg:gap-x-14">
          <h2 className="footer-title basis-1/2">Newsletter Subscribe</h2>
          <div className="w-full md:basis-1/2">
            <SubscribeForm />
          </div>
        </div>
        <div className="my-8 lg:my-16 border-t border-white"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src={logoWhite} width={76} height={32} alt="logo" className="mb-10" />
            <ul className="flex flex-col gap-y-8">
              <li className="flex items-center gap-2">
                <span><MailIcon /></span>
                <Link href="mailto:example@gmail.com" className="hover:underline">
                  example@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span><CallIcon /></span>
                <Link href="tel:+12345678910" className="hover:underline">
                  +123 45678910
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span><Timeicon /></span>
                <span>Monday - Friday, 08 am - 05 pm</span>
              </li>
            </ul>
            <div className="mt-10 flex gap-x-5">
              <Link
                href="#"
                className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-white/10 hover:opacity-75 transition-opacity"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-white/10 hover:opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 p-1 flex items-center justify-center rounded-full bg-white/10 hover:opacity-75 transition-opacity"
                aria-label="WhatsApp"
              >
                <WhatsappIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-fredoka font-semibold mb-6">Quick Links 1</h3>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-fredoka font-semibold mb-6">Quick Links 2</h3>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link href="/favorites" className="hover:underline">
                  My Favorites
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:underline">
                  My Cart
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-fredoka font-semibold mb-6">Download Our App</h3>
            <div>
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
        </div>
      </div>
      <div className="author">
        <p>Developed with 💙💛 by <Link href={"https://github.com/sandra-selezen"} target="_blank" rel="noopener">Sandra Selezen</Link></p>
      </div>
    </footer>
  )
}
