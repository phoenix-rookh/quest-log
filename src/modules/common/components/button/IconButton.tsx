import { ButtonSize } from "@/modules/common/components/button/types";
import { useTheme } from "@/modules/common/context/theme";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface IconProps {
  className: string;
}

type IconMapType = {
  close: React.FC<IconProps>;
};

const IconsMap: IconMapType = {
  close: XMarkIcon,
};

const iconSizeMap: Record<ButtonSize, string> = {
  sm: "size-4",
  md: "size-6",
};

const iconButtonSizeMap: Record<ButtonSize, string> = {
  sm: "p-2",
  md: "p-3",
};

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: keyof IconMapType;
  size?: ButtonSize;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, size = "md" } = props;
  const theme = useTheme();
  const Icon = IconsMap[icon];

  return (
    <button
      className={`${iconButtonSizeMap[size]} ${theme.btnIcon} rounded-md cursor-pointer font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      {...props}
    >
      <Icon className={iconSizeMap[size]} />
    </button>
  );
};
