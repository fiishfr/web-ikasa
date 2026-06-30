interface Props {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  current,
  total,
  onChange,
}: Props) {
  if (total <= 1) return null;

  return (
    <div className="mt-14 flex justify-center gap-3">

      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
            current === index + 1
              ? "bg-red-900 text-white"
              : "bg-white hover:bg-red-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

    </div>
  );
}