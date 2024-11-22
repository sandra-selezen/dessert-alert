import Link from "next/link";
import Image from "next/image";
import logoWhite from "../../../public/images/logo-white.png";
import { SubscribeForm } from "../Forms/SubscribeForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="py-12 md:py-20">
        <div>
          <h2 className="footer-title">Newsletter Subscribe</h2>
          <div>
            <SubscribeForm />
          </div>
        </div>
        <div>
          <Image src={logoWhite} width={76} height={32} alt="logo" />
        </div>
      </div>
      <div className="author">
        <p>Developed with 💙💛 by <Link href={"https://github.com/sandra-selezen"} target="_blank" rel="noopener">Sandra Selezen</Link></p>
      </div>
    </footer>
  )
}
