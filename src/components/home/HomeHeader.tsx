import * as React from "react";
import { Gift, Bell, Settings, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-2 mb-4 px-4 pt-4">
      <div className="flex items-center bg-secondary rounded-full p-1">
        <button className="p-2 rounded-full hover:bg-background transition-colors">
          <Gift className="w-5 h-5 text-foreground" />
        </button>
        <button className="p-2 rounded-full hover:bg-background transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
        </button>
        <Link to="/profile" className="p-2 rounded-full hover:bg-background transition-colors">
          <Settings className="w-5 h-5 text-foreground" />
        </Link>
      </div>
      <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md">
        <Plus className="w-5 h-5 text-accent-foreground" />
      </button>
    </div>
  );
};

export { HomeHeader };
