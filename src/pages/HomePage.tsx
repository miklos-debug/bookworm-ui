import * as React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { HomeHeader } from "@/components/home/HomeHeader";
import { LearningGoalBanner } from "@/components/home/LearningGoalBanner";
import { ShortsCarousel } from "@/components/home/ShortsCarousel";
import { BlinkOfTheDay } from "@/components/home/BlinkOfTheDay";
import { RecommendedSection } from "@/components/home/RecommendedSection";
import { PersonalizedSection } from "@/components/home/PersonalizedSection";
import { mockBooks } from "@/data/mockData";

const HomePage: React.FC = () => {
  const blinkOfTheDay = mockBooks[0];
  const personalizedBook = mockBooks[1];

  return (
    <AppShell>
      <div className="pb-6">
        <HomeHeader />
        
        {/* Home title */}
        <h1 className="text-3xl font-bold text-foreground mb-6 px-4">Home</h1>
        
        <div className="px-4">
          <LearningGoalBanner />
        </div>
        
        <ShortsCarousel />
        
        <BlinkOfTheDay book={blinkOfTheDay} />
        
        <RecommendedSection books={mockBooks} />
        
        <PersonalizedSection book={personalizedBook} />
      </div>
    </AppShell>
  );
};

export default HomePage;
