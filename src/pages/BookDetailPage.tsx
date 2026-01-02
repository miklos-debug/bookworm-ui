import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Lightbulb, BookOpen, Headphones, Bookmark, Lock, Play, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { IconButton } from "@/components/ui/IconButton";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { BookCard } from "@/components/ui/BookCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockBooks, mockChapters } from "@/data/mockData";

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = React.useState(false);

  const book = mockBooks.find((b) => b.id === id) || mockBooks[0];
  const similarBooks = mockBooks.filter((b) => b.id !== id);

  return (
    <AppShell showNav={true}>
      {/* Hero section with blurred background */}
      <div className="relative">
        {/* Background blur image */}
        <div className="absolute inset-0 h-80 overflow-hidden">
          <img 
            src={book.cover} 
            alt=""
            className="w-full h-full object-cover scale-110 blur-2xl opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        </div>

        {/* Back button */}
        <div className="relative z-10 pt-4 px-5">
          <IconButton 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-foreground"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </IconButton>
        </div>

        {/* Book cover */}
        <div className="relative z-10 flex justify-center py-6 px-5">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-40 h-52 object-cover rounded-xl shadow-elevated"
          />
        </div>

        {/* Action buttons */}
        <div className="relative z-10 flex justify-center gap-4 px-5 pb-6">
          <PrimaryButton 
            variant="outline" 
            leftIcon={<BookOpen className="w-4 h-4" />}
            onClick={() => navigate(`/summary/${book.id}`)}
          >
            Read Nexus
          </PrimaryButton>
          <PrimaryButton 
            variant="outline" 
            leftIcon={<Headphones className="w-4 h-4" />}
          >
            Play Nexus
          </PrimaryButton>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-8">
        {/* Title and bookmark */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h1 className="text-2xl font-bold text-foreground">
            Project Management for the Unofficial Proect Manager
          </h1>
          <IconButton 
            variant="ghost" 
            onClick={() => setIsSaved(!isSaved)}
            className={isSaved ? "text-accent" : "text-foreground-muted"}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
          </IconButton>
        </div>

        {/* Author info */}
        <p className="text-foreground-muted mb-1">Kory Kogon, Suzette Blakemore, and James wood</p>
        <p className="text-sm text-foreground-subtle mb-6">{book.publisher || "A FanklinConvey Title"}</p>

        {/* Stats */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 flex items-center justify-center gap-2 h-10 bg-secondary rounded-full">
            <Clock className="w-4 h-4 text-foreground-muted" />
            <span className="text-sm text-foreground">{book.readTime} min</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 h-10 bg-secondary rounded-full">
            <Lightbulb className="w-4 h-4 text-foreground-muted" />
            <span className="text-sm text-foreground">{book.keyIdeas} key ideas</span>
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-3">About this Book</h2>
          <p className="text-foreground-muted text-sm leading-relaxed">{book.description}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {book.categories.map((cat) => (
            <CategoryChip key={cat} size="sm">
              {cat}
            </CategoryChip>
          ))}
          <CategoryChip size="sm">Fiction</CategoryChip>
          <CategoryChip size="sm">Mind & Philosophy</CategoryChip>
        </div>

        {/* Chapters */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">{mockChapters.length + 53} Chapters</h2>
          
          <div className="space-y-3">
            {mockChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => !chapter.isLocked && navigate(`/summary/${book.id}`)}
                className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left"
              >
                <span className="text-foreground-muted text-sm w-6">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{chapter.title}</h3>
                  <p className="text-sm text-foreground-muted truncate">
                    {chapter.isLocked 
                      ? "Subscribe to unlock all 2 key ideas fro..." 
                      : "Tap to read this chapter"
                    }
                  </p>
                </div>
                {chapter.isLocked ? (
                  <Lock className="w-5 h-5 text-foreground-muted shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Play className="w-4 h-4 text-accent-foreground fill-current" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
            <span className="text-foreground-muted text-sm w-6"></span>
            <div className="flex-1">
              <h3 className="font-semibold text-accent">Final Summary</h3>
            </div>
            <Lock className="w-5 h-5 text-foreground-muted shrink-0" />
          </button>
        </div>

        {/* Author card */}
        <div className="bg-background-card rounded-2xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">James wood</h3>
              <p className="text-xs text-foreground-muted">{book.publisher || "A FanklinConvey Title"}</p>
              <p className="text-xs text-foreground-muted mt-1">
                Managers who want to create positive work environments
              </p>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        <div>
          <SectionHeader title="Similar Books" showAll showAllLink="/search" />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {similarBooks.map((similarBook) => (
              <BookCard key={similarBook.id} book={similarBook} />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default BookDetailPage;
