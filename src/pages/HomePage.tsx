import * as React from "react";
import { Link } from "react-router-dom";
import { Flame, Clock, Zap } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { AuthorAvatar } from "@/components/ui/AuthorAvatar";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { BookCard } from "@/components/ui/BookCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockAuthors, mockBooks, getTimeOfDay } from "@/data/mockData";

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("trending");

  const categories = [
    { id: "trending", label: "Trending", icon: <Flame className="w-4 h-4" /> },
    { id: "5min", label: "5-Minutes Read", icon: <Clock className="w-4 h-4" /> },
    { id: "quick", label: "Quick Listens", icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <AppShell>
      <div className="px-5 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">{getTimeOfDay()}</h1>
          <Link to="/profile">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-border"
            />
          </Link>
        </div>

        {/* Authors row */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6 -mx-5 px-5">
          {mockAuthors.map((author) => (
            <AuthorAvatar key={author.id} name={author.name} avatar={author.avatar} />
          ))}
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 -mx-5 px-5">
          {categories.map((cat) => (
            <CategoryChip
              key={cat.id}
              active={activeCategory === cat.id}
              icon={cat.icon}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </CategoryChip>
          ))}
        </div>

        {/* Promo banner */}
        <div className="bg-background-card rounded-2xl p-5 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-foreground-muted text-sm mb-1">Get unlimited access to books in just</p>
            <p className="text-4xl font-bold text-accent mb-2">$9.99</p>
            <p className="text-xs text-foreground-muted">*Terms & conditions apply</p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-4">
            <div className="flex -space-x-4">
              {mockBooks.slice(0, 3).map((book, i) => (
                <img 
                  key={book.id}
                  src={book.cover} 
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded-lg shadow-lg"
                  style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trending section */}
        <div className="mb-8">
          <SectionHeader title="Trending" showAll showAllLink="/search" />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {mockBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* Another Trending section */}
        <div className="mb-8">
          <SectionHeader title="Trending" showAll showAllLink="/search" />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {[...mockBooks].reverse().map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* 5-Minutes read section */}
        <div className="mb-8">
          <SectionHeader title="5-Minutes read" showAll showAllLink="/search" />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {mockBooks.filter(b => b.readTime <= 5).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* Continue Listening */}
        <div className="bg-background-card rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <img 
              src={mockBooks[0].cover} 
              alt={mockBooks[0].title}
              className="w-12 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-accent font-semibold mb-1">Continue Listening</p>
              <p className="text-sm text-foreground-muted truncate">
                Managers who want to create positive work environments...
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-foreground fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default HomePage;
