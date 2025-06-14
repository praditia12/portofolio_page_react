import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    ...props
}) => {
    const sizeClasses: Record<string, string> = {
        sm: "w-[120px] h-[45px] text-lg",
        md: "w-[158px] h-[60px] text-xl",
        lg: "w-[180px] h-[70px] text-2xl",
    };

    const variantClasses: Record<string, string> = {
        primary: "border-navy text-navy bg-orange",
        secondary: "border-orange text-orange bg-navy",
        outline: "border-navy text-navy bg-transparent",
    };

    return (
        <button
            className={`relative cursor-pointer group transition-all duration-200 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${className}`}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            {...props}
        >
            {/* Main Button */}
            <div
                className={`
                ${sizeClasses[size]} 
                rounded-md border border-solid 
                flex justify-center items-center font-medium
                transition-all duration-200 ease-out
                ${variant === "primary" ? variantClasses.outline : ""}
                ${variant === "secondary" ? variantClasses.outline : ""}
                ${variant === "outline" ? variantClasses.outline : ""}
                ${!disabled ? "group-hover:-translate-x-1 group-hover:-translate-y-1" : ""}
                ${!disabled ? "group-active:translate-x-0 group-active:translate-y-0" : ""}
            `}
            >
                {children}
            </div>

            {/* Shadow/Background */}
            <div
                className={`
                z-[-1] absolute top-1 left-1 
                ${sizeClasses[size]} 
                rounded-md transition-all duration-200 ease-out
                ${variant === "primary" ? "bg-orange" : ""}
                ${variant === "secondary" ? "bg-navy" : ""}
                ${variant === "outline" ? "bg-gray-200" : ""}
                ${!disabled ? "group-hover:translate-x-1 group-hover:translate-y-1" : ""}
                ${!disabled ? "group-active:translate-x-0 group-active:translate-y-0" : ""}
            `}
            />
        </button>
    );
};

export default Button;
