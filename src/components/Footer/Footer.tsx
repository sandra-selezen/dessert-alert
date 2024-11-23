import Link from "next/link";
import Image from "next/image";
import logoWhite from "../../../public/images/logo-white.png";
import { SubscribeForm } from "../Forms/SubscribeForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <div className="flex items-center flex-col gap-y-6 lg:flex-row lg:gap-x-14">
          <h2 className="footer-title">Newsletter Subscribe</h2>
          <div>
            <SubscribeForm />
          </div>
        </div>
        <div className="my-8 lg:my-16 border-t border-white"></div>
        <div className="px-4">
          <Image src={logoWhite} width={76} height={32} alt="logo" />
        </div>
      </div>
      <div className="author">
        <p>Developed with 💙💛 by <Link href={"https://github.com/sandra-selezen"} target="_blank" rel="noopener">Sandra Selezen</Link></p>
      </div>
    </footer>
  )
}
