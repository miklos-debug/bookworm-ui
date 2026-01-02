import * as React from "react";
import { Link } from "react-router-dom";

interface Short {
  id: string;
  title: string;
  bgColor: string;
  type: "text" | "quiz" | "quote";
  content?: string;
}

const mockShorts: Short[] = [
  { id: "1", title: "How Avoidance Affects Social...", bgColor: "bg-gradient-to-b from-pink-200 to-pink-300", type: "text" },
  { id: "2", title: "Seth Godin on Statutes of Li...", bgColor: "bg-gradient-to-b from-pink-100 to-purple-200", type: "text" },
  { id: "3", title: "Is there a surprising way...", bgColor: "bg-lavender", type: "quiz", content: "What mental technique helps strengthen belief in oneself?" },
  { id: "4", title: "James Clear on Growth...", bgColor: "bg-gradient-to-b from-teal-100 to-teal-200", type: "quote" },
];

const ShortsCarousel: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-foreground mb-1 px-4">Smarter in 5 minutes</h2>
      <p className="text-foreground-muted text-sm mb-4 px-4">
        Shorts help you learn something new every day. Be quick, today's set disappears at midnight.
      </p>
      
      <div className="flex gap-3 overflow-x-auto hide-scrollbar px-4">
        {mockShorts.map((short) => (
          <Link
            key={short.id}
            to={`/shorts/${short.id}`}
            className={`flex-shrink-0 w-40 h-48 ${short.bgColor} rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden`}
          >
            {short.type === "quiz" && (
              <div className="absolute inset-0 p-3 flex flex-col gap-2">
                <p className="text-xs font-medium text-foreground/80">{short.content}</p>
                <div className="space-y-1.5 mt-auto">
                  <div className="bg-background-elevated/80 rounded-lg py-1.5 px-2 text-xs text-foreground">
                    Mindfulness meditation
                  </div>
                  <div className="bg-background-elevated/80 rounded-lg py-1.5 px-2 text-xs text-foreground">
                    Brainstorming sessions
                  </div>
                  <div className="bg-background-elevated/80 rounded-lg py-1.5 px-2 text-xs text-foreground">
                    Auto-suggestion
                  </div>
                </div>
              </div>
            )}
            <p className="text-sm font-semibold text-foreground leading-tight">{short.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export { ShortsCarousel };
