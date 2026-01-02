import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { BookCard } from "@/components/ui/BookCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconButton } from "@/components/ui/IconButton";
import { mockBooks, mockCategories } from "@/data/mockData";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const filteredBooks = mockBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isSearching) {
    return (
      <AppShell>
        <div className="px-5 py-4">
          <div className="flex items-center gap-3 mb-6">
            <IconButton 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setSearchQuery("");
                setIsSearching(false);
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </IconButton>
            <SearchBar 
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Futurama"
              autoFocus
            />
          </div>

          <h2 className="text-lg font-bold text-foreground mb-4">Search results</h2>
          
          <div className="space-y-2">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} variant="list" />
            ))}
            {filteredBooks.length === 0 && (
              <p className="text-center text-foreground-muted py-8">
                No books found for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="px-5 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Explore</h1>

        <SearchBar 
          placeholder="Title, author or keyword"
          onSearch={handleSearch}
          className="mb-8"
        />

        {/* Topics */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {mockCategories.map((category) => (
              <CategoryChip
                key={category}
                size="sm"
                onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
              >
                {category}
              </CategoryChip>
            ))}
          </div>
        </div>

        {/* Fiction section */}
        <div className="mb-8">
          <SectionHeader 
            title="Fiction" 
            showAll 
            showAllLink={`/category/${encodeURIComponent("Fiction")}`} 
          />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {mockBooks.filter(b => b.categories.includes("Fiction")).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* Culture & Society section */}
        <div className="mb-8">
          <SectionHeader 
            title="Culture & Society" 
            showAll 
            showAllLink={`/category/${encodeURIComponent("Culture & Society")}`} 
          />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {mockBooks.filter(b => b.categories.includes("Culture & Society")).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* Life style section */}
        <div className="mb-8">
          <SectionHeader 
            title="Life style" 
            showAll 
            showAllLink={`/category/${encodeURIComponent("Life style")}`} 
          />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {mockBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default SearchPage;
