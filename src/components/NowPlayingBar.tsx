import * as React from "react";
import { Link } from "react-router-dom";
import { Play, Pause, SkipForward } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import type { Book } from "@/data/mockData";

interface NowPlayingBarProps {
  book: Book;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}

const NowPlayingBar: React.FC<NowPlayingBarProps> = ({ 
  book, 
  isPlaying = false,
  onPlayPause 
}) => {
  return (
    <div className="fixed bottom-nav left-0 right-0 z-40 bg-background-elevated border-t border-border">
      <div className="flex items-center gap-3 p-3 max-w-md mx-auto">
        <Link to={`/book/${book.id}`} className="shrink-0">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-10 h-12 object-cover rounded"
          />
        </Link>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-[10px] font-semibold rounded">
              Now Playing
            </span>
          </div>
          <p className="text-xs text-foreground-muted truncate">
            {book.description?.substring(0, 50)}...
          </p>
        </div>
        
        <div className="flex items-center gap-1">
          <IconButton 
            variant="ghost" 
            size="md"
            onClick={onPlayPause}
            className="text-accent"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </IconButton>
          <IconButton variant="ghost" size="md" className="text-accent">
            <SkipForward className="w-5 h-5" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export { NowPlayingBar };
