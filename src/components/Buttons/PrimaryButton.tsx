import Link, { LinkProps } from "next/link";

interface IPrimaryButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: LinkProps['href'];
  clasName?: string;
}

export const PrimaryButton = ({ children, type, onClick, href, clasName }: IPrimaryButton) => {

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`rounded-full py-5 px-10 bg-pink100 text-white hover:shadow-lg shadow-pink transition-shadow font-medium ${clasName}`}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`rounded-full py-5 px-10 bg-pink100 text-white hover:shadow-lg shadow-pink transition-shadow font-medium ${clasName}`}
        >
          {children}
        </button>
      )}
    </>
  )
}
