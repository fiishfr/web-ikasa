import DetailHero from "@/components/kegiatan/DetailHero";
import EventContent from "@/components/kegiatan/EventContent";
import EventInfo from "@/components/kegiatan/EventInfo";
import RelatedEvents from "@/components/kegiatan/RelatedEvents";

export default async function DetailKegiatanPage() {
  // nanti diganti dari Supabase
  const event = {
    title: "IKASA Soccer League 2024",
    category: "Olahraga",
    image: "/images/events/soccer.jpg",
    date: "15 Agustus 2024",
    time: "08.00 - 17.00 WIB",
    location: "Stadion Mini Ciputat, Tangerang Selatan",
    map: "/images/maps/stadion.png",
    description: [
      "IKASA Soccer League kembali hadir di tahun 2024! Ini adalah turnamen sepak bola tahunan yang paling ditunggu oleh seluruh alumni. Ajang ini bukan hanya sekadar kompetisi, tetapi juga momentum untuk mempererat tali silaturahmi antar angkatan.",
      "Tahun ini kami menghadirkan format kompetisi yang lebih seru dengan pembagian grup berdasarkan rentang tahun kelulusan. Siapkan tim terbaikmu dan buktikan siapa yang pantas menjadi juara.",
    ],
    highlights: [
      "Terbuka untuk seluruh alumni IKASA.",
      "Mendukung networking lintas angkatan.",
      "Dokumentasi foto dan video akan dipublikasikan.",
      "Panitia berhak melakukan penyesuaian jadwal apabila diperlukan.",
      "Peserta diharapkan hadir 30 menit sebelum acara dimulai.",
      "Konsumsi dan merchandise disediakan selama kegiatan.",
    ],
  };

  return (
    <main className="bg-slate-50">
      <DetailHero event={event} />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EventContent event={event} />
        </div>

        <aside>
          <EventInfo event={event} />
        </aside>
      </section>

      <RelatedEvents />
    </main>
  );
}
