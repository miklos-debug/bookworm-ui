import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div className={cn("relative w-full", className)}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
        <input
          ref={ref}
          type="text"
          className={cn(
            "w-full h-12 pl-12 pr-4 rounded-xl",
            "bg-background-input text-foreground placeholder:text-foreground-muted",
            "border border-border focus:border-accent",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-accent/20"
          )}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";

export { SearchBar };
