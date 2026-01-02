import * as React from "react";
import { useParams } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { BookCard } from "@/components/ui/BookCard";
import { mockBooks } from "@/data/mockData";

const CategoryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const categoryName = decodeURIComponent(name || "");

  // Filter books by category, or show all if no match
  const categoryBooks = mockBooks.filter(
    (book) => book.categories.some(cat => 
      cat.toLowerCase() === categoryName.toLowerCase()
    )
  );

  const booksToShow = categoryBooks.length > 0 ? categoryBooks : mockBooks;

  return (
    <AppShell showNav={false}>
      <PageHeader showBack />
      <div className="px-5 pb-8">
        <h1 className="text-3xl font-bold text-foreground italic mb-6">{categoryName}</h1>

        <div className="grid grid-cols-2 gap-4">
          {booksToShow.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              variant="large" 
              showDescription 
              className="w-full"
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default CategoryPage;
