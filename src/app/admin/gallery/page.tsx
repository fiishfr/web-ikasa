import GalleryHeader from "@/components/admin/gallery/GalleryHeader";
import GalleryStats from "@/components/admin/gallery/GalleryStats";
import GalleryToolbar from "@/components/admin/gallery/GalleryToolbar";
import GalleryGrid from "@/components/admin/gallery/GalleryGrid";
import LoadMore from "@/components/admin/gallery/LoadMore";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-10 px-8 py-10 xl:px-10">

        <GalleryHeader />

        <GalleryStats />

        <GalleryToolbar />

        <GalleryGrid />

        <LoadMore />

      </div>
    </main>
  );
}