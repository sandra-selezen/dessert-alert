interface ISecondaryButton {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export const SecondaryButton = ({ children, type }: ISecondaryButton) => {
  return (
    <button
      type={type}
      className="rounded-full py-5 px-10 bg-transparent border border-solid border-pink100 hover:shadow-lg shadow-pink transition-shadow font-medium text-pink100"
    >
      {children}
    </button>
  )
}
