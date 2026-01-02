import * as React from "react";
import { ChevronRight, Target } from "lucide-react";

const LearningGoalBanner: React.FC = () => {
  return (
    <button className="w-full bg-background-elevated rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-border mb-6">
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        <Target className="w-5 h-5 text-accent" />
      </div>
      <div className="flex-1 text-left">
        <p className="font-semibold text-foreground text-sm">Set a weekly learning goal</p>
        <p className="text-foreground-muted text-xs">Make personal growth a habit</p>
      </div>
      <ChevronRight className="w-5 h-5 text-foreground-muted" />
    </button>
  );
};

export { LearningGoalBanner };
