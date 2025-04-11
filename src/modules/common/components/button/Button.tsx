import React from "react";
import { ButtonAppearance, ButtonSize } from "./types";
import { useTheme } from "@/modules/common/context/theme";
import { Theme } from "@/modules/common/context/theme/types";

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
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { appearance = "contained", size = "md", children, type = "button" } = props;
  const theme = useTheme();

  return (
    <button
      {...props}
      type={type}
      className={`${getButtonAppearance(appearance, theme)} ${sizeMap[size]} cursor-pointer rounded-md font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
};
