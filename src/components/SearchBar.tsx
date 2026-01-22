import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(localValue);
    onSearch();
  };

  const handleClear = () => {
    setLocalValue("");
    onChange("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onChange(localValue);
      onSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search games..."
        className="search-input pr-10"
      />
      {localValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
