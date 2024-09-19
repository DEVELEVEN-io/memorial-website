import { HTMLAttributes } from "react";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}
