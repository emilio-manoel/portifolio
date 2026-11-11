import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "secondaryStrong" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
}


const sizeClass = {
  sm: "text-xs gap-1 px-3 py-1.5",
  md: "text-sm gap-2 px-4 py-3",
  lg: "text-base gap-2.5 px-6 py-4",
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "",
  secondary: "",
  secondaryStrong: "",
  ghost: "",
};

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={["", sizeClass[size], variantClass[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {Icon && <Icon size={18} className="shrink-0" />}
      {children}
    </button>
  );
}