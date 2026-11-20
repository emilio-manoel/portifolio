import {
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactNode,
  type ComponentType,
} from "react";
import type { LucideProps } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ComponentType<LucideProps> | ReactNode;
  iconRight?: ComponentType<LucideProps> | ReactNode;
}

const sizeClass = {
  sm: "text-sm md:text-base gap-2 px-6 py-2.5",
  md: "text-base md:text-lg gap-2.5 px-7 py-3",
  lg: "text-lg md:text-xl gap-3 px-8 py-3.5",
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-primary text-primary hover:scale-105 active:scale-95 bg-transparent",
  secondary:
    "border border-transparent text-primary hover:scale-105 active:scale-95 bg-transparent",
  outline:
    "border border-primary-border text-primary hover:border-primary hover:scale-105 active:scale-95 bg-transparent",
  ghost:
    "text-text hover:text-primary hover:scale-105 active:scale-95 bg-transparent",
};

function renderIcon(iconItem?: ComponentType<LucideProps> | ReactNode) {
  if (!iconItem) return null;
  if (isValidElement(iconItem)) return iconItem;
  const IconComp = iconItem as ComponentType<LucideProps>;
  return <IconComp size={20} className="shrink-0" />;
}

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center font-medium rounded-[3.125rem] cursor-pointer uppercase tracking-wider transition-all duration-300 ease-in-out disabled:opacity-50 disabled:pointer-events-none",
        sizeClass[size],
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {renderIcon(Icon)}
      {children}
      {renderIcon(IconRight)}
    </button>
  );
}

export default Button;
