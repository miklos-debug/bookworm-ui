import * as React from "react";
import { Link } from "react-router-dom";
import { Bell, Bookmark } from "lucide-react";
import { Book } from "@/data/mockData";

interface BlinkOfTheDayProps {
  book: Book;
}

const BlinkOfTheDay: React.FC<BlinkOfTheDayProps> = ({ book }) => {
  const [isSaved, setIsSaved] = React.useState(book.isSaved || false);

  return (
    <section className="mb-8 px-4">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xl font-bold text-foreground">Your Blink of the day</h2>
        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
          <Bell className="w-5 h-5 text-accent" />
        </button>
      </div>
      <p className="text-foreground-muted text-sm mb-4">Picked for you, based on what you like</p>
      
      <Link to={`/book/${book.id}`} className="block">
        <div className="bg-coral rounded-2xl p-6 flex items-center justify-center relative mb-3" style={{ minHeight: 200 }}>
          <img 
            src={book.cover}
            alt={book.title}
            className="h-44 w-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-coral border-2 border-white" />
          </div>
        </div>
      </Link>
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-bold text-foreground text-lg">{book.title}</h3>
          <p className="text-foreground-muted text-sm">{book.author}</p>
          <p className="text-foreground-muted text-xs mt-1">{book.description}</p>
        </div>
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className="p-2"
        >
          <Bookmark 
            className={`w-6 h-6 ${isSaved ? 'fill-primary text-primary' : 'text-primary'}`} 
          />
        </button>
      </div>
    </section>
  );
};

export { BlinkOfTheDay };
