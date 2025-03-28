import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ToggleIconButtonProps = {
  isActive?: boolean;
  onToggle?: (isActive: boolean) => void;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  activeClassName?: string;
  inactiveClassName?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ToggleIconButton = ({
  isActive: externalIsActive,
  onToggle,
  activeIcon,
  icon,
  activeClassName = "",
  inactiveClassName = "",
  variant = "ghost",
  className = "",
  ...props
}: ToggleIconButtonProps) => {
  const [internalIsActive, setInternalIsActive] = useState(false);
  const isActive =
    externalIsActive !== undefined ? externalIsActive : internalIsActive;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);
    const newState = !isActive;
    setInternalIsActive(newState);
    onToggle?.(newState);
  };

  return (
    <Button
      type="button"
      variant={variant}
      onClick={handleClick}
      className={cn(
        "transition-colors duration-200",
        isActive ? activeClassName : inactiveClassName,
        className
      )}
      {...props}
    >
      {isActive ? activeIcon : icon}
    </Button>
  );
};

export default ToggleIconButton;
