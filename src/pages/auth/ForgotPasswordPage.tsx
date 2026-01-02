import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { IconButton } from "@/components/ui/IconButton";

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background px-5 py-4">
      <IconButton 
        variant="ghost" 
        size="md" 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
      </IconButton>

      <h1 className="text-3xl font-bold text-foreground mb-2">Forgot password?</h1>
      <p className="text-foreground-muted mb-8">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Check your email</h2>
          <p className="text-foreground-muted mb-6">
            We've sent a password reset link to {email}
          </p>
          <Link to="/auth/login" className="text-accent font-semibold hover:underline">
            Back to login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-14 px-4 rounded-xl bg-background-input text-foreground placeholder:text-foreground-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
            required
          />

          <PrimaryButton type="submit" fullWidth size="lg">
            Send reset link
          </PrimaryButton>
        </form>
      )}

      <p className="text-center text-foreground-muted mt-6">
        Remember your password?{" "}
        <Link to="/auth/login" className="text-foreground font-semibold hover:text-accent transition-colors">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
