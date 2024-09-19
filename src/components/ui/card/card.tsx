import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`}
      {...props}
    />
  );
}
