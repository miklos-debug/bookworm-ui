import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { mockUser } from "@/data/mockData";
import { ChevronRight, User, Bell, Moon, HelpCircle, Shield, LogOut } from "lucide-react";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Edit Profile", onClick: () => {} },
    { icon: Bell, label: "Notifications", onClick: () => {} },
    { icon: Moon, label: "Appearance", onClick: () => {} },
    { icon: HelpCircle, label: "Help & Support", onClick: () => {} },
    { icon: Shield, label: "Privacy Policy", onClick: () => {} },
  ];

  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <AppShell showNav={false}>
      <PageHeader title="Profile" showBack />
      
      <div className="px-5 pb-8">
        {/* Profile card */}
        <div className="flex items-center gap-4 mb-8 pt-4">
          <img 
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-accent/20"
          />
          <div>
            <h2 className="text-xl font-bold text-foreground">{mockUser.name}</h2>
            <p className="text-foreground-muted">{mockUser.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground capitalize">
              {mockUser.subscription} plan
            </span>
          </div>
        </div>

        {/* Upgrade banner */}
        {mockUser.subscription === "free" && (
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-5 mb-8">
            <h3 className="font-bold text-foreground mb-1">Upgrade to Premium</h3>
            <p className="text-sm text-foreground-muted mb-4">
              Get unlimited access to all books and features
            </p>
            <PrimaryButton size="sm">
              Upgrade Now
            </PrimaryButton>
          </div>
        )}

        {/* Menu items */}
        <div className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground-muted" />
              </div>
              <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-foreground-muted" />
            </button>
          ))}
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-destructive/10 transition-colors text-destructive"
        >
          <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="flex-1 text-left font-medium">Log out</span>
        </button>
      </div>
    </AppShell>
  );
};

export default ProfilePage;
