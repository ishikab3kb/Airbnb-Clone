"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {};

const suggestions: { label: string; value: string }[] = [];

const SearchFilter = (props: Props) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = useMemo(() => {
    if (!query) return [];

    return suggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelectItem = (value: string) => {
    const selected = suggestions.find((item) => item.value === value);
    if (selected) {
      setQuery(selected.label);
      setIsOpen(false);
      inputRef.current?.focus();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search your desired location"
          className="pl-8 rounded-full"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query && setIsOpen(true)}
        />
      </div>
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute mt-1 w-full z-10">
          <Command className="rounded-lg border shadow-md">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {filteredSuggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion.value}
                    value={suggestion.value}
                    onSelect={handleSelectItem}
                  >
                    {suggestion.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    </div>
  );
};
export default SearchFilter;
