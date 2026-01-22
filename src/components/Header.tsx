import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
}

const Header = ({ searchValue, onSearchChange, onSearch }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full logo-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold text-foreground hidden sm:block">
                ame store
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <SearchBar 
              value={searchValue} 
              onChange={onSearchChange} 
              onSearch={onSearch}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <span className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
              <span>English EU | EUR</span>
            </span>
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
