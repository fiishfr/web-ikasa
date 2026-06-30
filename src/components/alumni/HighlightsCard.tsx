import { BadgeCheck } from "lucide-react";
import { Alumni } from "@/types/alumni";
import { Reveal } from "../ui/reveal";
type Props = {
  alumni: Alumni;
};

export default function HighlightsCard({
  alumni,
}: Props) {
  return (
    <Reveal>
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
        Highlights
      </h2>

      <div className="flex flex-wrap gap-3">

        {alumni.highlights.map((item) => (

          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-800"
          >

            <BadgeCheck
              size={16}
              className="text-red-900"
            />

            {item}

          </div>

        ))}

      </div>

    </section>
    </Reveal>
  );
}