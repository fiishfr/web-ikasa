import { Search, X } from "lucide-react";

type Props = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function SearchBar({ searchTerm, onSearchChange }: Props) {
  return (
    <div className="relative">

  <Search
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
    className="w-full rounded-xl border py-3 pl-11 pr-11"
    placeholder="Cari alumni..."
  />

  {searchTerm && (
    <button
      type="button"
      onClick={() => onSearchChange("")}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-900"
    >
      <X size={18} />
    </button>
  )}

</div>
  );
}
