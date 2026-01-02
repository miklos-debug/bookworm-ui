import * as React from "react";
import { cn } from "@/lib/utils";

interface CategoryChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md";
}

const CategoryChip = React.forwardRef<HTMLButtonElement, CategoryChipProps>(
  ({ className, active, icon, size = "md", children, ...props }, ref) => {
    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap",
          "transition-all duration-200 focus:outline-none active:scale-95",
          sizes[size],
          active 
            ? "bg-accent text-accent-foreground" 
            : "bg-secondary text-foreground border border-border hover:bg-secondary/80",
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

CategoryChip.displayName = "CategoryChip";

export { CategoryChip };
