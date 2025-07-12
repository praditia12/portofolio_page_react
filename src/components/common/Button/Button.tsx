import React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils"; // optional helper for class merging

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    className = "",
    ...props
}) => {
    const base =
        "inline-flex items-center justify-center border font-medium rounded-md transition-all duration-200 focus:outline-none hover:cursor-pointer";

    const sizeClasses: Record<Size, string> = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const variantClasses: Record<Variant, string> = {
        primary: "bg-orange text-white border-orange hover:bg-orange/90",
        secondary: "bg-navy text-white border-navy hover:bg-navy/90",
        outline: "bg-transparent text-navy border-navy hover:bg-navy hover:text-white",
        ghost: "bg-transparent text-navy border-0 hover:bg-gray-100",
    };

    const isDisabled = disabled || loading;

    return (
        <button
            disabled={isDisabled}
            className={cn(
                base,
                sizeClasses[size],
                variantClasses[variant],
                isDisabled ? "opacity-50 cursor-not-allowed" : "",
                className
            )}
            {...props}
        >
            {loading ? (
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
                <>
                    {leftIcon && <span className="mr-3">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="ml-3">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

export default Button;
