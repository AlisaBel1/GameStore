import GameCard from "./GameCard";


interface Game {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  platform: string;
  region: string;
  original_price: number;
  current_price: number;
  discount_percent: number;
  cashback: number;
  wishlist_count: number;
}

interface GameGridProps {
  games: Game[];
  isLoading: boolean;
  resultsCount: number;
}

const GameGrid = ({ games, isLoading, resultsCount }: GameGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="game-card animate-pulse">
            <div className="aspect-[3/4] bg-muted" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-1/4" />
              <div className="h-5 bg-muted rounded w-1/2" />
              <div className="h-3 bg-muted rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No games found</p>
        <p className="text-muted-foreground text-sm mt-2">Try a different search term</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Results found: <span className="text-foreground font-semibold">{resultsCount}</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            imageUrl={game.image_url}
            platform={game.platform}
            region={game.region}
            originalPrice={game.original_price}
            currentPrice={game.current_price}
            discountPercent={game.discount_percent}
            cashback={game.cashback}
            wishlistCount={game.wishlist_count}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
