import * as React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { mockCategories } from "@/data/mockData";

const STORAGE_KEYS = {
  name: "onboardingName",
  email: "onboardingEmail",
  categories: "onboardingCategories",
  books: "onboardingBooks",
  userId: "onboardingUserId",
};

const OnboardingTopicsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.categories);
    return stored ? JSON.parse(stored) : [];
  });

  const userName = localStorage.getItem(STORAGE_KEYS.name) ?? "";

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const handleNext = () => {
    localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(selectedCategories));
    localStorage.removeItem(STORAGE_KEYS.books);
    navigate("/onboarding/books", { state: { categories: selectedCategories } });
  };

  return (
    <div className="min-h-screen bg-background px-5 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">Step 1 of 2</p>
          <h1 className="text-3xl font-bold text-foreground">
            {userName ? `Hi ${userName}, pick your favorite topics` : "Pick your favorite topics"}
          </h1>
          <p className="text-foreground-muted">
            Select the categories you are most interested in so we can tailor your reading recommendations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {mockCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                  isSelected
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border bg-background-card text-foreground hover:border-accent/60"
                }`}
              >
                <div>
                  <p className="text-base font-semibold">{category}</p>
                  <p className="text-sm text-foreground-muted">Curated picks in {category.toLowerCase()}</p>
                </div>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                    isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border"
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-muted">
            {selectedCategories.length} selected
          </p>
          <PrimaryButton
            size="lg"
            disabled={selectedCategories.length === 0}
            onClick={handleNext}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTopicsPage;
