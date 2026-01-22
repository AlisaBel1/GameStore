import { useEffect, useState } from "react";
import Header from "@/components/Header";
import GameGrid from "@/components/GameGrid";
import { useGames } from "@/hooks/useGames";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const { games, isLoading, fetchGames } = useGames();

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const handleSearch = () => {
    fetchGames(searchValue);
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGames(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, fetchGames]);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchValue={searchValue} 
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />

    
    
      
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 py-2 text-center">
        <p className="text-sm">
          <span className="mr-2">🎮</span>
          Games, Gift Cards, Top-Ups & More | Best Deals
        </p>
        <a href="https://www.linkedin.com/in/alisa-biliavska-9a771b349"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
        >
          Alisa Biliavska
        </a>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <GameGrid 
          games={games} 
          isLoading={isLoading}
          resultsCount={games.length}
        />
      </main>
    </div>
  );
};

export default Index;
