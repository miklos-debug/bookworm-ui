import * as React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { BookCard } from "@/components/ui/BookCard";
import { mockBooks } from "@/data/mockData";
import { Bookmark, Clock, CheckCircle } from "lucide-react";

type LibraryTab = "saved" | "progress" | "completed";

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<LibraryTab>("saved");

  const tabs = [
    { id: "saved" as LibraryTab, label: "Saved Books", icon: <Bookmark className="w-4 h-4" /> },
    { id: "progress" as LibraryTab, label: "In Progress", icon: <Clock className="w-4 h-4" /> },
    { id: "completed" as LibraryTab, label: "Completed", icon: <CheckCircle className="w-4 h-4" /> },
  ];

  const getFilteredBooks = () => {
    switch (activeTab) {
      case "saved":
        return mockBooks.filter((b) => b.isSaved);
      case "progress":
        return mockBooks.filter((b) => b.progress && b.progress > 0 && b.progress < 100);
      case "completed":
        return mockBooks.filter((b) => b.progress === 100);
      default:
        return mockBooks;
    }
  };

  const filteredBooks = getFilteredBooks();

  return (
    <AppShell>
      <div className="px-5 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">My Library</h1>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 -mx-5 px-5">
          {tabs.map((tab) => (
            <CategoryChip
              key={tab.id}
              active={activeTab === tab.id}
              icon={tab.icon}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </CategoryChip>
          ))}
        </div>

        {/* Books grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredBooks.map((book) => (
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
              {activeTab === "saved" && <Bookmark className="w-8 h-8 text-foreground-muted" />}
              {activeTab === "progress" && <Clock className="w-8 h-8 text-foreground-muted" />}
              {activeTab === "completed" && <CheckCircle className="w-8 h-8 text-foreground-muted" />}
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {activeTab === "saved" && "No saved books yet"}
              {activeTab === "progress" && "No books in progress"}
              {activeTab === "completed" && "No completed books"}
            </h2>
            <p className="text-foreground-muted text-sm max-w-xs">
              {activeTab === "saved" && "Start exploring and save books to read later"}
              {activeTab === "progress" && "Start reading a book to track your progress"}
              {activeTab === "completed" && "Finish reading a book to see it here"}
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default LibraryPage;
