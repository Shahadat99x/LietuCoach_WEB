import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300
          ${hoverEffect ? "hover:-translate-y-1 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-200/20" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
