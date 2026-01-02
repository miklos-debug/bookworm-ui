import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, Headphones, MoreVertical, Play, Pause } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { mockBooks, mockChapters } from "@/data/mockData";

const SummaryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const book = mockBooks.find((b) => b.id === id) || mockBooks[0];
  const chapter = mockChapters[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg px-5 py-4 flex items-center justify-between">
        <IconButton variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronDown className="w-5 h-5" />
        </IconButton>
        
        <div className="flex items-center gap-2">
          <IconButton 
            variant="ghost" 
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-accent"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <Headphones className="w-5 h-5" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <MoreVertical className="w-5 h-5" />
          </IconButton>
        </div>
      </header>

      {/* Content */}
      <main className="px-5 pb-12">
        <h1 className="text-2xl font-bold text-foreground mb-6 leading-tight">
          What is in it for me? Learn how to become an effecive unofficial project manager
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-foreground-muted leading-relaxed mb-6">
            Far far away, behind the word mountains, far from the countries Vokalia and 
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
            right at the coast of the Semantics, a large language ocean. A small river named 
            Duden flows by their place and supplies it with the necessary regelialia. It is a 
            paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>

          <p className="text-foreground-muted leading-relaxed mb-6">
            The Big Oxmox advised her not to do so, because there were thousands of bad 
            Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't 
            listen.
          </p>

          <p className="text-foreground-muted leading-relaxed mb-6">
            Little Blind Text didn't listen. She packed her seven versalia, put her initial into the 
            belt and made herself on the way.
          </p>

          <p className="text-foreground-muted leading-relaxed mb-6">
            Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the 
            Line Lane. Pityful a rethoric question ran over her cheek, then
          </p>
        </div>

        {/* Progress indicator */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-32 h-1 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-foreground-muted rounded-full w-1/3" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
