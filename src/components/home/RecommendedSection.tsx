import * as React from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { Book } from "@/data/mockData";

interface RecommendedSectionProps {
  books: Book[];
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ books }) => {
  return (
    <section className="mb-8 px-4">
      <h2 className="text-xl font-bold text-foreground mb-1">Recommended for you</h2>
      <p className="text-foreground-muted text-sm mb-4">We think you'll like these</p>
      
      <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4">
        {books.map((book) => (
          <RecommendedCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

const RecommendedCard: React.FC<{ book: Book }> = ({ book }) => {
  const [isSaved, setIsSaved] = React.useState(book.isSaved || false);
  const bgColors = ['bg-peach', 'bg-lavender', 'bg-mint'];
  const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div className="flex-shrink-0 w-40">
      <Link to={`/book/${book.id}`}>
        <div className={`${randomBg} rounded-2xl p-4 h-48 flex items-center justify-center relative mb-3`}>
          <img 
            src={book.cover}
            alt={book.title}
            className="h-36 w-auto rounded-lg shadow-md object-cover"
          />
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-coral" />
          </div>
        </div>
      </Link>
      
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">{book.title}</h3>
          <p className="text-foreground-muted text-xs mt-0.5 truncate">{book.author}</p>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsSaved(!isSaved);
          }}
          className="flex-shrink-0"
        >
          <Bookmark 
            className={`w-5 h-5 ${isSaved ? 'fill-primary text-primary' : 'text-primary'}`} 
          />
        </button>
      </div>
    </div>
  );
};

export { RecommendedSection };
