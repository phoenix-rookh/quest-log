import React, { useContext } from "react";
import { ButtonAppearance, ButtonSize } from "./types";
import { ThemeContext } from "@/modules/common/context/theme/ThemeContext";
import { Theme } from "@/modules/common/context/theme/types/theme";

const getButtonAppearance = (appearance: ButtonAppearance, theme: Theme) => {
  switch (appearance) {
    case "contained":
      return theme.btnContained;
    case "outlined":
      return theme.btnOutlined;
    case "text":
      return theme.btnText;
  }
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
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      type={type}
      className={`${getButtonAppearance(appearance, theme)} ${sizeMap[size]} cursor-pointer font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
};
