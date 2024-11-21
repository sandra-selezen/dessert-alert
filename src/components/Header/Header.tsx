import Image from "next/image";
import logoBlack from "../../../public/images/logo-black.png";
import { leftNavLinks, rightNavLinks } from "@/lib/constants";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex gap-12 items-center px-6 py-7 mx-auto max-w-5xl">
      <div>
        <Image src={logoBlack} width={76} height={32} alt="logo" />
      </div>
      <nav className="flex gap-12">
        <ul className="flex gap-16">
          {leftNavLinks.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-12">
          <li>
            <Link href={"/favorites"} className="py-1">My Favorites</Link>
          </li>
          <li>
            <Link href={"/cart"} className="py-1">My Car</Link>
          </li>
          <li>
            <Link href={"/contacts"} className="py-1">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
