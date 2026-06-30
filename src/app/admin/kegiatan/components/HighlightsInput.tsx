"use client";

interface Props {
  value: string[];
  onChange: (items: string[]) => void;
}

export default function HighlightsInput({
  value,
  onChange,
}: Props) {
  function update(index: number, text: string) {
    const arr = [...value];
    arr[index] = text;
    onChange(arr);
  }

  function add() {
    onChange([...value, ""]);
  }

  function remove(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">

      <label className="font-semibold">
        Informasi Penting
      </label>

      {value.map((item, index) => (
        <div
          key={index}
          className="flex gap-2"
        >
          <input
            className="flex-1 rounded border p-3"
            value={item}
            onChange={(e) =>
              update(index, e.target.value)
            }
          />

          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded bg-red-500 px-4 text-white"
          >
            Hapus
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="rounded bg-slate-900 px-5 py-2 text-white"
      >
        + Tambah Informasi
      </button>

    </div>
  );
}