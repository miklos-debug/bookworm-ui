import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title?: string;
  showBack?: boolean;
  rightContent?: React.ReactNode;
  transparent?: boolean;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  showBack = false, 
  rightContent,
  transparent = false,
  className 
}) => {
  const navigate = useNavigate();

  return (
    <header className={cn(
      "sticky top-0 z-40 flex items-center justify-between h-14 px-4",
      transparent ? "bg-transparent" : "bg-background/80 backdrop-blur-lg border-b border-border",
      className
    )}>
      <div className="flex items-center gap-3">
        {showBack && (
          <IconButton 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 h-5" />
          </IconButton>
        )}
        {title && (
          <h1 className="text-xl font-bold text-foreground">{title}</h1>
        )}
      </div>
      {rightContent && (
        <div className="flex items-center gap-2">
          {rightContent}
        </div>
      )}
    </header>
  );
};

export { PageHeader };
