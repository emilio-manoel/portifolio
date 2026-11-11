import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" 
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
}

const standardClass =  {
  standard: "flex content-center items-center gap-2.5 w-full bg-transparent rounded-[3.125rem] border-none py-3.5 px-6 transition ease-in-out duration-300 cursor-pointer text-primary"
};

const sizeClass = {
  sm: "text-xs gap-1 px-3 py-1.5",
  md: "text-sm gap-2 px-4 py-3",
  lg: "text-base gap-2.5 px-6 py-4",
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "",
  secondary: "",
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
      className={["", standardClass.standard , sizeClass[size], variantClass[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {Icon && <Icon size={18} className="shrink-0" />}
      {children}
    </button>
  );
}