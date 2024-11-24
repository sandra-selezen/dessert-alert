interface IPrimaryButton {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export const PrimaryButton = ({ children, type }: IPrimaryButton) => {
  return (
    <button
      type={type}
      className="rounded-full py-5 px-10 bg-pink100 text-white hover:shadow-lg shadow-pink transition-shadow font-medium"
    >
      {children}
    </button>
  )
}
