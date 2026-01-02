import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  variant?: "default" | "compact" | "large" | "list";
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ variant = "default", className }) => {
  if (variant === "list") {
    return (
      <div className={cn("flex items-center gap-3 p-2", className)}>
        <div className="w-12 h-16 bg-secondary rounded-md animate-pulse-soft" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-secondary rounded w-3/4 animate-pulse-soft" />
          <div className="h-3 bg-secondary rounded w-1/2 animate-pulse-soft" />
          <div className="h-3 bg-secondary rounded w-1/4 animate-pulse-soft" />
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("w-24 shrink-0", className)}>
        <div className="aspect-[3/4] bg-secondary rounded-lg mb-2 animate-pulse-soft" />
        <div className="h-3 bg-secondary rounded w-full mb-1 animate-pulse-soft" />
        <div className="h-3 bg-secondary rounded w-2/3 animate-pulse-soft" />
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className={cn("w-full", className)}>
        <div className="aspect-[3/4] bg-secondary rounded-xl mb-3 animate-pulse-soft" />
        <div className="h-4 bg-secondary rounded w-3/4 mb-2 animate-pulse-soft" />
        <div className="h-3 bg-secondary rounded w-1/2 mb-2 animate-pulse-soft" />
        <div className="h-3 bg-secondary rounded w-full animate-pulse-soft" />
      </div>
    );
  }

  return (
    <div className={cn("w-32 shrink-0", className)}>
      <div className="aspect-[3/4] bg-secondary rounded-lg mb-2 animate-pulse-soft" />
      <div className="h-3 bg-secondary rounded w-full mb-1 animate-pulse-soft" />
      <div className="h-3 bg-secondary rounded w-2/3 mb-1.5 animate-pulse-soft" />
      <div className="h-3 bg-secondary rounded w-1/2 animate-pulse-soft" />
    </div>
  );
};

export { SkeletonCard };
