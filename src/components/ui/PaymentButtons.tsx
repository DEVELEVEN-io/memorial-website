import React from "react";

interface PaymentButtonProps {
  color: string;
  hoverColor: string;
  ringColor: string;
  textColor: string;
  icon: React.ReactNode;
  text: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
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
      className={`text-${textColor} bg-${color} hover:bg-${hoverColor} focus:outline-none focus:ring-4 focus:ring-${ringColor} mb-2 me-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium`}
    >
      <span className="me-2">{icon}</span>
      {text}
    </button>
  );
};

export default PaymentButton;
