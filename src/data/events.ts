import { Event } from "@/types/event";

export const events: Event[] = [
  {
    id: 1,
    slug: "ikasa-soccer-league-2024",

    title: "IKASA Soccer League 2024",

    description:
      "Turnamen sepak bola tahunan antar angkatan. Siapkan tim terbaikmu.",

    image: "/images/events/soccer.jpg",

    date: 15,

    month: "OKT",

    category: "Sports",

    location: "Stadion Utama",

    content:
      "Turnamen sepak bola tahunan yang mempertemukan seluruh angkatan alumni IKASA."
  },

  {
    id: 2,

    slug: "career-talk-tech",

    title: "Career Talk Tech Industry",

    description:
      "Sharing bersama alumni yang bekerja di perusahaan teknologi.",

    image: "/images/events/career.jpg",

    date: 5,

    month: "NOV",

    category: "Seminar",

    location: "Auditorium Gedung Pusat",

    content:
      "Belajar langsung dari alumni yang bekerja di Google, Tokopedia, Gojek, dll."
  },

  {
    id: 3,

    slug: "scafo",

    title: "SCAFO Charity",

    description:
      "Kegiatan sosial akhir tahun bersama seluruh alumni.",

    image: "/images/events/social.jpg",

    date: 20,

    month: "DES",

    category: "Social",

    location: "Berbagai Lokasi",

    content:
      "Program bakti sosial IKASA kepada masyarakat."
  }
];