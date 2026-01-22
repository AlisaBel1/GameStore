import { Heart, Info } from "lucide-react";
import { useState } from "react";

interface GameCardProps {
  title: string;
  imageUrl: string;
  platform: string;
  region: string;
  originalPrice?: number;
  currentPrice?: number;
  discountPercent?: number;
  cashback?: number;
  wishlistCount?: number;
}



const getPlatformIcon = (platform: string) => {
  const platformLower = platform.toLowerCase();
  if (platformLower.includes('ea')) return '🟠';
  if (platformLower.includes('xbox')) return '🟢';
  if (platformLower.includes('playstation')) return '🔵';
  if (platformLower.includes('steam')) return '⚫';
  return '🎮';
  
};


const GameCard = ({
  title,
  imageUrl,
  platform,
  region,
  originalPrice = 0,
  currentPrice = 0,
  discountPercent = 0,
  cashback = 0,
  wishlistCount = 0,
}: GameCardProps) => {
  return (
    <div className="game-card group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl || '/placeholder.jpg'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Cashback Badge */}
        <div className="absolute top-3 left-3">
          <div className="cashback-badge">
            <span className="text-sm">↻</span>
            CASHBACK
          </div>
        </div>

        {/* Platform Badge - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
          <div className="platform-badge w-fit">
            <span>{getPlatformIcon(platform)}</span>
            <span>{platform}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {title || 'Unknown Game'}
        </h3>

        {/* Region */}
        <div className={`region-badge ${region === 'GLOBAL' ? 'region-global' : 'region-europe'}`}>
          {region || 'N/A'}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-muted-foreground text-sm">From</span>
          <span className="original-price">€{originalPrice.toFixed(2)}</span>
          {discountPercent > 0 && (
            <span className="discount-tag">-{discountPercent}%</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="current-price">€{currentPrice.toFixed(2)}</span>
          <Info className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Cashback Amount */}
        <div className="text-sm">
          <span className="text-muted-foreground">Cashback: </span>
          <span className="text-accent font-semibold">€{cashback.toFixed(2)}</span>
        </div>

        {/* Wishlist */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm pt-1">
          <Heart className="w-4 h-4" />
          <span>{wishlistCount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
