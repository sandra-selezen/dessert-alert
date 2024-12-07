import Link, { LinkProps } from "next/link";

interface ISecondaryButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: LinkProps['href'];
  className?: string;
}

export const SecondaryButton = ({ children, type, onClick, href, className }: ISecondaryButton) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`rounded-full py-5 px-10 bg-transparent border border-solid border-pink100 hover:shadow-lg shadow-pink transition-shadow font-medium text-pink100 ${className}`}
        >
            {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`rounded-full py-5 px-10 bg-transparent border border-solid border-pink100 hover:shadow-lg shadow-pink transition-shadow font-medium text-pink100 ${className}`}
        >
          {children}
        </button>
      )}
    </>
  )
}
