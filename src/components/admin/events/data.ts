export interface EventItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  location: string;
  attendees: string;
  status: "upcoming" | "past";
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Annual Grand Alumni Homecoming",
    slug: "/alumni-homecoming-24",
    image:
      "",
    date: "15 October 2024 • 18:00 WIB",
    location: "Grand Ballroom, Hotel Aston",
    attendees: "1.2k",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Tech Leadership Seminar",
    slug: "/tech-leadership-q3",
    image:
      "",
    date: "02 November 2024 • 09:00 WIB",
    location: "Auditorium Main Campus",
    attendees: "45",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Networking Mixer",
    slug: "/mixer-tech-jun24",
    image:
      "",
    date: "12 June 2024 • 19:00 WIB",
    location: "The Hub Co-working Space",
    attendees: "Ended",
    status: "past",
  },
];