import React, { ComponentType, FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface SidebarMenuButtonProps {
  icon: ComponentType<SvgIconProps>;
  text: string;
  trailingIcon?: ComponentType<SvgIconProps>;
  className?: string;
}

const SidebarMenuButton: FC<SidebarMenuButtonProps> = ({
  icon: Icon,
  text,
  trailingIcon: TrailingIcon,
  className = "",
}) => {
  return (
    <button className={className}>
      <div className="flex items-center gap-5">
        {Icon && <Icon />}
        <span className="justify-self-start">{text}</span>
      </div>
      {TrailingIcon && <TrailingIcon />}
    </button>
  );
};

export default SidebarMenuButton;
