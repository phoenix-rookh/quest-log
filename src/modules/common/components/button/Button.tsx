import React from "react";
import { ButtonAppearance, ButtonSize } from "./types";
const appearanceMap: Record<ButtonAppearance, string> = {
  contained: "bg-indigo-600 hover:bg-indigo-700 text-white",
  outlined: "bg-transparent border border-indigo-600 hover:bg-indigo-50 text-indigo-600",
  text: "bg-transparent hover:bg-indigo-50 text-indigo-600",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "py-2 px-4 rounded-md text-sm",
  md: "py-3 px-6 rounded-md text-base",
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { appearance = "contained", size = "md", children, type = "button" } = props;

  return (
    <button
      {...props}
      type={type}
      className={`${appearanceMap[appearance]} ${sizeMap[size]} cursor-pointer font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
};
