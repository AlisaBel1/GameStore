import { useState, useCallback } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Game {
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

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = useCallback(async (searchTerm?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const gamesRef = collection(db, "games");
      const q = query(gamesRef, orderBy("wishlist_count", "desc"));
      const snapshot = await getDocs(q);

      let data: Game[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Game, "id">),
      }));

      // 🔍 client-side search (Firestore не умеет ilike)
      if (searchTerm?.trim()) {
        const term = searchTerm.toLowerCase();
        data = data.filter(game =>
          game.title.toLowerCase().includes(term) ||
          game.platform.toLowerCase().includes(term) ||
          game.region.toLowerCase().includes(term)
        );
      }

      setGames(data);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to fetch games");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    games,
    isLoading,
    error,
    fetchGames,
  };
};
