import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const STORAGE_KEYS = {
  name: "onboardingName",
  email: "onboardingEmail",
  categories: "onboardingCategories",
  books: "onboardingBooks",
  userId: "onboardingUserId",
};

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEYS.name, formData.name);
    localStorage.setItem(STORAGE_KEYS.email, formData.email);
    localStorage.removeItem(STORAGE_KEYS.categories);
    localStorage.removeItem(STORAGE_KEYS.books);

    if (!localStorage.getItem(STORAGE_KEYS.userId)) {
      const generated = typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `guest-${Date.now()}`;
      localStorage.setItem(STORAGE_KEYS.userId, generated);
    }

    navigate("/onboarding/topics");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0 h-[40%]">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
          alt="People reading"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-5 pb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Create account</h1>
        <p className="text-foreground-muted mb-8">Start your reading journey today</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full name"
            className="w-full h-14 px-4 rounded-xl bg-background-input text-foreground placeholder:text-foreground-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          />

          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
            className="w-full h-14 px-4 rounded-xl bg-background-input text-foreground placeholder:text-foreground-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          />

          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Password"
            className="w-full h-14 px-4 rounded-xl bg-background-input text-foreground placeholder:text-foreground-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          />

          <PrimaryButton type="submit" fullWidth size="lg">
            Create account
          </PrimaryButton>
        </form>

        {/* Login link */}
        <p className="text-center text-foreground-muted mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-foreground font-semibold hover:text-accent transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
