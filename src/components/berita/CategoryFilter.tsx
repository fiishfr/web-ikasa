"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      <button
        onClick={() => onChange("Semua")}
        className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
          active === "Semua"
            ? "bg-red-900 text-white"
            : "bg-white hover:bg-red-50"
        }`}
      >
        Semua
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            active === category
              ? "bg-red-900 text-white"
              : "bg-white hover:bg-red-50"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}