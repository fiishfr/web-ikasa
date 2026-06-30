import Image from "next/image";

type Props = {
  item: {
    title: string;
    category: string;
    image: string;
    height: string;
  };
};

export default function GalleryCard({ item }: Props) {
  const height =
    item.height === "large"
      ? "h-[520px]"
      : item.height === "medium"
      ? "h-[390px]"
      : "h-[270px]";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-lg ${height}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-xs font-semibold uppercase tracking-widest text-red-300">
          {item.category}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.title}
        </h3>
      </div>
    </div>
  );
}