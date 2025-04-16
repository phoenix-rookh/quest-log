import { useTheme } from "@/modules/common/context/theme";
import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme();

  return (
    <input
      {...props}
      className={`${theme.input} py-3 px-6 text-base rounded-md font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    />
  );
};
