import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/lib/supabaseClient";

const STORAGE_KEYS = {
  name: "onboardingName",
  email: "onboardingEmail",
  categories: "onboardingCategories",
  books: "onboardingBooks",
  userId: "onboardingUserId",
};

interface OnboardingBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
}

const createCategoryBooks = (category: string): OnboardingBook[] => {
  return Array.from({ length: 10 }, (_, index) => {
    const order = index + 1;
    const title = `${category} Pick #${order}`;
    return {
      id: `${category.toLowerCase().replace(/\s+/g, "-")}-${order}`,
      title,
      author: `Editorial Team ${order}`,
      cover: `https://placehold.co/240x320/111827/FFFFFF?text=${encodeURIComponent(title)}`,
      category,
    };
  });
};

const getStoredCategories = (): string[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.categories);
  return stored ? JSON.parse(stored) : [];
};

const ensureUserId = (): string => {
  const existing = localStorage.getItem(STORAGE_KEYS.userId);
  if (existing) return existing;
  const generated = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `guest-${Date.now()}`;
  localStorage.setItem(STORAGE_KEYS.userId, generated);
  return generated;
};

const OnboardingBooksPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories] = React.useState<string[]>(() => {
    const fromState = (location.state as { categories?: string[] } | null)?.categories;
    return fromState && fromState.length > 0 ? fromState : getStoredCategories();
  });
  const [activeCategory, setActiveCategory] = React.useState(categories[0] ?? "");
  const [selectedBooks, setSelectedBooks] = React.useState<OnboardingBook[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.books);
    return stored ? JSON.parse(stored) : [];
  });
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    if (categories.length === 0) {
      navigate("/onboarding/topics", { replace: true });
    }
  }, [categories, navigate]);

  React.useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [activeCategory, categories]);

  const books = React.useMemo(() => createCategoryBooks(activeCategory), [activeCategory]);
  const selectedBookIds = React.useMemo(
    () => new Set(selectedBooks.map((book) => book.id)),
    [selectedBooks]
  );

  const toggleBook = (book: OnboardingBook) => {
    setSelectedBooks((prev) => {
      const exists = prev.some((item) => item.id === book.id);
      if (exists) {
        return prev.filter((item) => item.id !== book.id);
      }
      return [...prev, book];
    });
  };

  const handleComplete = async () => {
    if (selectedBooks.length < 2) {
      toast.error("Please select at least two books to continue.");
      return;
    }

    localStorage.setItem(STORAGE_KEYS.books, JSON.stringify(selectedBooks));
    localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(categories));

    const payload = {
      user_id: ensureUserId(),
      user_name: localStorage.getItem(STORAGE_KEYS.name) ?? null,
      user_email: localStorage.getItem(STORAGE_KEYS.email) ?? null,
      selected_categories: categories,
      selected_books: selectedBooks.map(({ id, title, author, category }) => ({
        id,
        title,
        author,
        category,
      })),
      created_at: new Date().toISOString(),
    };

    if (!supabase) {
      toast.error("Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      navigate("/home");
      return;
    }

    setIsSaving(true);
    const { error } = await supabase.from("user_onboarding_preferences").insert(payload);
    setIsSaving(false);

    if (error) {
      toast.error("We could not save your preferences yet. Please try again later.");
    } else {
      toast.success("Preferences saved! We will use them to personalize your picks.");
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background px-5 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">Step 2 of 2</p>
          <h1 className="text-3xl font-bold text-foreground">Pick at least two books</h1>
          <p className="text-foreground-muted">
            Select at least two books from your chosen topics. These choices help us tailor your reading experience.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="text-sm font-semibold text-foreground">
            Choose a topic
            <select
              className="mt-2 w-full rounded-xl border border-border bg-background-input px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <div className="rounded-2xl border border-border bg-background-card px-4 py-3 text-sm text-foreground-muted">
            {selectedBooks.length} selected
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => {
            const isSelected = selectedBookIds.has(book.id);
            return (
              <button
                key={book.id}
                type="button"
                onClick={() => toggleBook(book)}
                className={`group rounded-2xl border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background-card hover:border-accent/60"
                }`}
              >
                <div className="flex gap-4">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-28 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-2">
                    <div>
                      <p className="text-base font-semibold text-foreground">{book.title}</p>
                      <p className="text-sm text-foreground-muted">{book.author}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-foreground-muted">
                      {book.category}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-foreground-muted">Tap to {isSelected ? "remove" : "select"}</span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border"
                    }`}
                  >
                    {isSelected ? "✓" : ""}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-muted">
            Pick at least 2 books to continue
          </p>
          <PrimaryButton
            size="lg"
            disabled={selectedBooks.length < 2 || isSaving}
            onClick={handleComplete}
          >
            {isSaving ? "Saving..." : "Finish setup"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBooksPage;
