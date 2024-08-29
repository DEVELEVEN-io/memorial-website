"use client";
import React from "react";

interface AuthButtonProps {
  color: string;
  hoverColor: string;
  ringColor: string;
  textColor: string;
  icon: React.ReactNode;
  text: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  color,
  hoverColor,
  ringColor,
  textColor,
  icon,
  text,
}) => {
  return (
    <button
      type="button"
      className={`mb-2 me-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4`}
      style={{
        backgroundColor: color,
        color: textColor,
        boxShadow: `0 0 0 4px ${ringColor}`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
    >
      <span className="me-2">{icon}</span>
      {text}
    </button>
  );
};

export default AuthButton;
