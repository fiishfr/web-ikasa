const filters = [
  "Semua",
  "SCAFO",
  "Soccer League",
  "Reuni",
];

export default function GalleryFilter() {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((item, index) => (
        <button
          key={item}
          className={`rounded-full px-6 py-3 text-sm font-medium transition
          ${
            index === 0
              ? "bg-red-900 text-white"
              : "bg-slate-100 hover:bg-red-900 hover:text-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}