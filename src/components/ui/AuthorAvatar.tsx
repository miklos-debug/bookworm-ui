import * as React from "react";
import { cn } from "@/lib/utils";

interface AuthorAvatarProps {
  name: string;
  avatar: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ 
  name, 
  avatar, 
  size = "md",
  className 
}) => {
  const sizes = {
    sm: { container: "w-12", image: "w-10 h-10" },
    md: { container: "w-16", image: "w-14 h-14" },
    lg: { container: "w-20", image: "w-18 h-18" },
  };

  return (
    <div className={cn("flex flex-col items-center gap-1.5 shrink-0", sizes[size].container, className)}>
      <div className={cn(
        "rounded-full overflow-hidden ring-2 ring-accent/50",
        sizes[size].image
      )}>
        <img 
          src={avatar} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs text-foreground-muted text-center truncate w-full">{name}</span>
    </div>
  );
};

export { AuthorAvatar };
