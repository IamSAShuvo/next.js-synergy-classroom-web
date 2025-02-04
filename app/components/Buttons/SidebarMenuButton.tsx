import React, { ComponentType, FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface SidebarMenuButtonProps {
  icon: ComponentType<SvgIconProps>;
  text: string;
  trailingIcon?: ComponentType<SvgIconProps>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const SidebarMenuButton: FC<SidebarMenuButtonProps> = ({
  icon: Icon,
  text,
  trailingIcon: TrailingIcon,
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={className}>
      <div className="flex items-center gap-5">
        {Icon && <Icon />}
        <span className="justify-self-start">{text}</span>
      </div>
      {TrailingIcon && <TrailingIcon />}
    </button>
  );
};

export default SidebarMenuButton;
