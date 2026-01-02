import * as React from "react";
import { Link } from "react-router-dom";
import { Headphones, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Book } from "@/data/mockData";

interface BookCardProps {
  book: Book;
  variant?: "default" | "compact" | "large" | "list";
  showDescription?: boolean;
  className?: string;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  variant = "default", 
  showDescription = false,
  className 
}) => {
  if (variant === "list") {
    return (
      <Link 
        to={`/book/${book.id}`}
        className={cn(
          "flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors",
          className
        )}
      >
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-12 h-16 object-cover rounded-md"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-foreground truncate">{book.title}</h4>
          <p className="text-xs text-foreground-muted truncate">{book.author}</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="flex items-center gap-1 text-xs text-foreground-muted">
              <Headphones className="w-3 h-3" />
              {book.listenTime}m
            </span>
            <span className="flex items-center gap-1 text-xs text-foreground-muted">
              <Eye className="w-3 h-3" />
              {book.readTime}m
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link 
        to={`/book/${book.id}`}
        className={cn("block w-24 shrink-0", className)}
      >
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-medium text-xs text-foreground truncate">{book.title}</h4>
        <p className="text-xs text-foreground-muted truncate">{book.author}</p>
      </Link>
    );
  }

  if (variant === "large") {
    return (
      <Link 
        to={`/book/${book.id}`}
        className={cn("block w-full", className)}
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-foreground">{book.title}</h4>
        <p className="text-sm text-foreground-muted mb-1">{book.author}</p>
        {showDescription && (
          <p className="text-sm text-foreground-muted line-clamp-2">{book.description}</p>
        )}
        <div className="flex items-center gap-3 mt-2">
          <span className="flex items-center gap-1.5 text-xs text-accent">
            <Headphones className="w-3.5 h-3.5" />
            {book.listenTime}m
          </span>
          <span className="flex items-center gap-1.5 text-xs text-accent">
            <Eye className="w-3.5 h-3.5" />
            {book.readTime}m
          </span>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link 
      to={`/book/${book.id}`}
      className={cn("block w-32 shrink-0", className)}
    >
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2 shadow-card">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-medium text-sm text-foreground truncate">{book.title}</h4>
      <p className="text-xs text-foreground-muted truncate">{book.author}</p>
      <div className="flex items-center gap-2 mt-1.5">
        <span className="flex items-center gap-1 text-xs text-foreground-muted">
          <Headphones className="w-3 h-3" />
          {book.listenTime}m
        </span>
        <span className="flex items-center gap-1 text-xs text-foreground-muted">
          <Eye className="w-3 h-3" />
          {book.readTime}m
        </span>
      </div>
    </Link>
  );
};

export { BookCard };
