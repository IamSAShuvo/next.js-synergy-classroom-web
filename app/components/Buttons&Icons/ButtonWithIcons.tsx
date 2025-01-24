import React, { ComponentType, FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface ButtonWithIconsProps {
  icon: ComponentType<SvgIconProps>;
  text: string;
  trailingIcon?: ComponentType<SvgIconProps>;
}

const ButtonWithIcons: FC<ButtonWithIconsProps> = ({
  icon: Icon,
  text,
  trailingIcon: TrailingIcon,
}) => {
  return (
    <button className="w-1/6 mx-auto bg-skyBlue hover:bg-indigo-600 text-white px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between">
      <div className="flex items-center gap-5">
        {Icon && <Icon />}
        <span className="justify-self-start">{text}</span>
      </div>
      {TrailingIcon && <TrailingIcon />}
    </button>
  );
};

export default ButtonWithIcons;
