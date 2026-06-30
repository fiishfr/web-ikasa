import { Eye, Trash2 } from "lucide-react";

interface Props {
  image: string;
  title: string;
  category: string;
}

export default function GalleryCard({
  image,
  title,
  category,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">

      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100">

        <div className="flex h-full flex-col justify-between p-4">

          <div className="flex justify-end gap-2">

            <button className="rounded-md bg-white/90 p-2">
              <Eye size={18} />
            </button>

            <button className="rounded-md bg-red-600 p-2 text-white">
              <Trash2 size={18} />
            </button>

          </div>

          <div>

            <span className="rounded bg-white/20 px-2 py-1 text-xs text-white backdrop-blur">
              {category}
            </span>

            <h3 className="mt-2 text-white font-semibold">
              {title}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}