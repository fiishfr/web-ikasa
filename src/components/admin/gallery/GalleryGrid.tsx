import GalleryCard from "./GalleryCard";

const photos = [
  {
    title: "Final Match 2023",
    category: "Soccer League",
    image: "",
  },
  {
    title: "Gala Dinner Alumni",
    category: "SCAFO",
    image: "",
  },
  {
    title: "Seminar Bisnis 2024",
    category: "SCAFO",
    image: "",
  },
  {
    title: "Selebrasi Kemenangan",
    category: "Soccer League",
    image: "",
  },
  {
    title: "Talkshow Alumni",
    category: "SCAFO",
    image: "",
  },
  {
    title: "Family Gathering",
    category: "SCAFO",
    image: "",
  },
];

export default function GalleryGrid() {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <GalleryCard key={photo.title} {...photo} />
      ))}
    </section>
  );
}