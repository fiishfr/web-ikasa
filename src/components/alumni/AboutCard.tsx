import { User } from "lucide-react";
import { Alumni } from "@/types/alumni";
import { Reveal } from "../ui/reveal";

type Props = {
  alumni: Alumni;
};

export default function AboutCard({ alumni }: Props) {
  return (
    <Reveal>
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
          <User className="h-5 w-5 text-red-900" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            About Me
          </h2>

          <p className="text-sm text-gray-500">
            Short introduction
          </p>
        </div>

      </div>

      {/* Content */}
      <p className="leading-8 text-gray-600 whitespace-pre-line">
        {alumni.about}
      </p>

    </section>
    </Reveal>
  );
}