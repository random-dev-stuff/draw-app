"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const buttonVariants = {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    },
    defaultVariants: {
      default: "primary",
      size: "md",
    },
  },
};

export const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const variantClass = buttonVariants.variants.variant[variant];
  const sizeClass = buttonVariants.variants.size[size];
  return (
    <button
      className={`${className} ${variantClass} ${sizeClass} bg-primary text-primary-foreground hover:cursor-pointer border-red rounded-md flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
