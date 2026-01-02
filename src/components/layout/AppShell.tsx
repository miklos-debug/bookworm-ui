import * as React from "react";
import { BottomNav } from "./BottomNav";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  showNav?: boolean;
  className?: string;
}

const AppShell: React.FC<AppShellProps> = ({ children, showNav = true, className }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className={cn(
        "min-h-screen",
        showNav && "pb-nav",
        className
      )}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
};

export { AppShell };
