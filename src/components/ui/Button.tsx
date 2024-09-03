import React from "react";
import { IoInformationCircle } from "react-icons/io5";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  place?: "start" | "end";
}

export const Button: React.FC<ButtonProps> = ({
  text = "Button",
  icon = <IoInformationCircle />,
  className = "",
  size = "medium",
  color = "primary",
  disabled = false,
  onClick,
  place = "start",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <button
      className={`btn flex items-center justify-center rounded-md ${sizeClasses[size]} ${colorClasses[color]} ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon && place === "start" && <span className="icon mr-2">{icon}</span>}
      {text}
      {icon && place === "end" && <span className="icon ml-2">{icon}</span>}
    </button>
  );
};
