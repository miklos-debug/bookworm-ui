import * as React from "react";
import { Link } from "react-router-dom";
import { Bookmark, MoreHorizontal, Play, Star, BookOpen } from "lucide-react";
import { Book } from "@/data/mockData";

interface PersonalizedSectionProps {
  book: Book;
}

const PersonalizedSection: React.FC<PersonalizedSectionProps> = ({ book }) => {
  const [isSaved, setIsSaved] = React.useState(book.isSaved || false);

  return (
    <section className="mb-8 px-4">
      <h2 className="text-xl font-bold text-foreground mb-1">Personalized for you</h2>
      <p className="text-foreground-muted text-sm mb-4">Latest titles you might enjoy based on your interests</p>
      
      <div className="bg-lavender rounded-3xl p-6 pb-4">
        {/* Book cover area */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            {/* Light arch behind book */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-24 bg-white/30 rounded-t-full" />
            <img 
              src={book.cover}
              alt={book.title}
              className="relative h-52 w-auto rounded-xl shadow-xl object-cover"
            />
            <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-accent" />
            </div>
          </div>
        </div>
        
        {/* Related book pill */}
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-foreground-muted" />
          <span className="text-xs text-foreground-muted font-medium">Because you read similar books</span>
        </div>
        
        {/* Description */}
        <p className="text-foreground text-sm leading-relaxed mb-4">
          What sets successful people apart? Find out the hidden factors that shape extraordinary success in today's thought-provoking Blink!
        </p>
        
        {/* Meta info */}
        <div className="flex items-center gap-2 text-foreground-muted text-xs mb-4">
          <span className="font-semibold text-accent">Blink</span>
          <span>•</span>
          <span>{book.readTime}min</span>
          <span>•</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.2 (1.3K)</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="p-2"
            >
              <Bookmark 
                className={`w-6 h-6 ${isSaved ? 'fill-accent text-accent' : 'text-foreground-muted'}`} 
              />
            </button>
            <button className="p-2">
              <MoreHorizontal className="w-6 h-6 text-foreground-muted" />
            </button>
          </div>
          
          <div className="flex items-center gap-0">
            <Link 
              to={`/summary/${book.id}`}
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-l-full text-sm"
            >
              Read
            </Link>
            <button className="bg-primary text-primary-foreground p-3 rounded-r-full border-l border-primary-foreground/20">
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PersonalizedSection };
