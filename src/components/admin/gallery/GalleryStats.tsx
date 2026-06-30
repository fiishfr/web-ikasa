import UploadCard from "./UploadCard";
import CategoryCards from "./CategoryCards";

export default function GalleryStats() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">

      <UploadCard />

      <CategoryCards
        title="SCAFO"
        total="245 Foto"
        description="Acara tahunan dan kompetisi seni."
        color="red"
      />

      <CategoryCards
        title="Soccer League"
        total="128 Foto"
        description="Pertandingan liga sepak bola alumni."
        color="blue"
      />

    </section>
  );
}