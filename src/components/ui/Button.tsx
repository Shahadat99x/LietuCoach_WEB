import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-heading font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

    const variants = {
      primary: "bg-violet-600 text-white shadow-violet-200 hover:bg-violet-700 hover:shadow-lg focus:ring-violet-500 shadow-md",
      secondary: "bg-teal-400 text-white shadow-teal-100 hover:bg-teal-500 hover:shadow-lg focus:ring-teal-400 shadow-md",
      outline: "border-2 border-neutral-200 bg-transparent hover:border-violet-200 hover:bg-violet-50 text-neutral-700 hover:text-violet-700 focus:ring-neutral-500",
      ghost: "bg-transparent hover:bg-neutral-100/50 text-neutral-600 hover:text-neutral-900",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      if (href.startsWith("http")) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
