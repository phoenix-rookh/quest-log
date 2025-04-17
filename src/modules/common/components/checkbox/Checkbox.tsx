import { useTheme } from "@/modules/common/context/theme";
import React from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const theme = useTheme();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={`${theme.checkbox} p-3 text-base rounded-md font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        {...props}
      />
      <label className={`${theme.textPrimary} ml-2 cursor-pointer`} htmlFor={props.id}>
        {props.title}
      </label>
    </div>
  );
};
