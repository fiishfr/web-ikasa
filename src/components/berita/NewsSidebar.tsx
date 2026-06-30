import ShareButtons from "./ShareButtons";
import Link from "next/link";
import {
  CalendarDays,
  User2,
  Folder,
  Tag,
  Share2,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Copy } from "lucide-react";

interface NewsSidebarProps {
  news: {
    author: {
      name: string;
    };
    category: {
      name: string;
    };
    createdAt: string;
    readingTime: number;
    tags: {
      id: number;
      name: string;
      slug: string;
    }[];
  };
}

export default function NewsSidebar({
  news,
}: NewsSidebarProps) {
  return (
    <div className="space-y-6 lg:sticky lg:top-24">

      {/* Informasi */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

        <h3 className="mb-6 font-jakarta text-xl font-bold">
          Informasi Berita
        </h3>

        <div className="space-y-5">

          <div className="flex gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-900">
              <User2 size={20} />
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Penulis
              </p>

              <p className="font-medium">
                {news.author.name}
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-900">
              <CalendarDays size={20} />
            </div>

            <div>

              <p className="text-sm text-neutral-500">
                Dipublikasikan
              </p>

              <p className="font-medium">
                {news.createdAt}
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-900">
              <Folder size={20} />
            </div>

            <div>

              <p className="text-sm text-neutral-500">
                Kategori
              </p>

              <p className="font-medium">
                {news.category.name}
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-900">
              <Tag size={20} />
            </div>

            <div>

              <p className="text-sm text-neutral-500">
                Waktu Baca
              </p>

              <p className="font-medium">
                {news.readingTime} menit
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Tags */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

        <h3 className="mb-5 font-jakarta text-xl font-bold">
          Tags
        </h3>

        <div className="flex flex-wrap gap-2">

          {news.tags.map((tag) => (

            <Link
              key={tag.id}
              href={`/berita?tag=${tag.slug}`}
              className="
                rounded-full
                bg-neutral-100
                px-4
                py-2
                text-sm
                transition
                hover:bg-red-900
                hover:text-white
              "
            >
              #{tag.name}
            </Link>

          ))}

        </div>

      </div>

      {/* Share */}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">

        <div className="mb-5 flex items-center gap-2">

          <Share2 size={18} />

          <h3 className="font-jakarta text-xl font-bold">
            Bagikan
          </h3>

        <ShareButtons />
        
        </div>

      </div>

    </div>
  );
}