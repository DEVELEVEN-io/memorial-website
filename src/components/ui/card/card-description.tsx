import { HTMLAttributes } from "react";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={`text-muted-foreground text-sm ${className}`} {...props} />
  );
}
