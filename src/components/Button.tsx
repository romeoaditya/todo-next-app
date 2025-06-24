import {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {children, onClick, type = "button", className} = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-blue-500 px-3 py-2 text-white font-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
