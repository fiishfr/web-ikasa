import Image from "next/image";

interface NewsContentProps {
  news: {
    content: string;
    gallery?: string[];
  };
}

export default function NewsContent({
  news,
}: NewsContentProps) {
  return (
    <article className="space-y-10">

      {/* Content */}

      <div
        className="
          rounded-3xl
          border
          border-neutral-200
          bg-white
          p-8
          shadow-sm
          md:p-10
        "
      >
        <article
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:font-jakarta
            prose-headings:font-bold
            prose-headings:text-neutral-900

            prose-p:text-neutral-700
            prose-p:leading-8

            prose-a:text-red-900
            prose-a:no-underline
            hover:prose-a:underline

            prose-strong:text-neutral-900

            prose-blockquote:border-red-900
            prose-blockquote:text-neutral-600
            prose-blockquote:italic

            prose-img:rounded-2xl
            prose-img:shadow-lg

            prose-li:marker:text-red-900

            prose-table:w-full
            prose-th:bg-neutral-100
          "
          dangerouslySetInnerHTML={{
            __html: news.content ?? "",
          }}
        />
      </div>

      {/* Gallery */}

      {news.gallery && news.gallery.length > 0 && (
        <section
          className="
            rounded-3xl
            border
            border-neutral-200
            bg-white
            p-8
            shadow-sm
          "
        >
          <h2 className="mb-6 font-jakarta text-2xl font-bold">
            Galeri Foto
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {news.gallery.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  aspect-4/3
                  overflow-hidden
                  rounded-2xl
                "
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>
            ))}

          </div>
        </section>
      )}

    </article>
  );
}