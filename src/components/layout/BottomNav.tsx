import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Zap, Search, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Zap, label: "Shorts", path: "/shorts" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Bookmark, label: "My Library", path: "/library" },
];

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-elevated border-t border-border">
      <div className="flex items-center justify-around h-nav pb-safe max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path) || 
            (item.path === "/home" && location.pathname === "/");
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 transition-colors min-w-[64px]",
                isActive 
                  ? "text-accent" 
                  : "text-foreground-muted hover:text-foreground"
              )}
            >
              {isActive ? (
                <div className="bg-secondary rounded-full px-4 py-1.5">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
              ) : (
                <item.icon className="w-5 h-5" />
              )}
              <span className={cn(
                "text-xs",
                isActive ? "font-semibold text-accent" : "font-medium"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export { BottomNav };
