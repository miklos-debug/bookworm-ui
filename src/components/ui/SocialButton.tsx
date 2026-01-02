import * as React from "react";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, icon, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full h-14 px-4 flex items-center justify-center gap-3",
          "bg-white text-black font-medium rounded-xl",
          "transition-all duration-200 hover:bg-white/90 active:scale-[0.98]",
          "focus:outline-none focus:ring-2 focus:ring-accent/50",
          className
        )}
        {...props}
      >
        <span className="shrink-0 w-6 h-6 flex items-center justify-center">{icon}</span>
        <span>{label}</span>
      </button>
    );
  }
);

SocialButton.displayName = "SocialButton";

export { SocialButton };
