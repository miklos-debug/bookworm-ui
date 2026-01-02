import * as React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { BookCard } from "@/components/ui/BookCard";
import { mockBooks } from "@/data/mockData";

const SavedPage: React.FC = () => {
  const savedBooks = mockBooks.filter((b) => b.isSaved);

  return (
    <AppShell>
      <div className="px-5 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Saved Books</h1>

        {savedBooks.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {savedBooks.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                variant="large" 
                showDescription 
                className="w-full"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">No saved books yet</h2>
            <p className="text-foreground-muted text-sm max-w-xs">
              Tap the bookmark icon on any book to save it for later
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default SavedPage;
