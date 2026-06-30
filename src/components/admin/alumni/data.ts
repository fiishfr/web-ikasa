export type Alumni = {
  id: number;
  name: string;
  email: string;
  year: number;
  university: string;
  major: string;
  status: "active" | "pending";
  avatar: string;
};

export const alumni: Alumni[] = [
  {
    id: 1,
    name: "Andi Wijaya",
    email: "andi.w@example.com",
    year: 2018,
    university: "Universitas Indonesia",
    major: "Teknik Informatika",
    status: "active",
    avatar: "",
  },
  {
    id: 2,
    name: "Budi Santoso",
    email: "budi.s@example.com",
    year: 2023,
    university: "Institut Teknologi Bandung",
    major: "Arsitektur",
    status: "pending",
    avatar: "",
  },
  {
    id: 3,
    name: "Citra Kirana",
    email: "c.kirana@example.com",
    year: 2015,
    university: "Universitas Gadjah Mada",
    major: "Hukum Internasional",
    status: "active",
    avatar: "",
  },
];