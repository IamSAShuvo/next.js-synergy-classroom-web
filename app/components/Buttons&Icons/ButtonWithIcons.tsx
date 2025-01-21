import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

const ButtonWithIcons = ({
  icon: Icon,
  text,
  trailingIcon: TrailingIcon,
}: {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
  trailingIcon?: React.ComponentType<SvgIconProps>;
}) => {
  return (
    <button className="w-1/6 mx-auto bg-skyBlue hover:bg-indigo-600 text-white px-7 py-5 rounded-full font-medium text-sm leading-[14px] flex justify-between">
      <div className="flex items-center gap-5">
        {Icon && <Icon />}
        <span className="justify-self-start">{text}</span>
      </div>
      {TrailingIcon && <TrailingIcon />}
    </button>
  );
};

export default ButtonWithIcons;
