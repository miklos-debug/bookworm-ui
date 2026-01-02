import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  showAll?: boolean;
  showAllLink?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  showAll = false, 
  showAllLink = "#",
  className 
}) => {
  return (
    <div className={cn("flex items-center justify-between mb-3", className)}>
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {showAll && (
        <Link 
          to={showAllLink}
          className="flex items-center gap-0.5 text-sm font-medium text-foreground-muted hover:text-accent transition-colors"
        >
          Show all
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export { SectionHeader };
