import { Building2 } from "lucide-react";
import { Alumni } from "@/types/alumni";
import { Reveal } from "../ui/reveal";
type Props = {
  alumni: Alumni;
};

export default function OrganizationTimeline({
  alumni,
}: Props) {
  return (
    <Reveal>
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Heading */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">

          <Building2 className="h-5 w-5 text-red-900" />

        </div>

        <div>

          <h2 className="text-2xl font-semibold text-gray-900">
            High School Organizations
          </h2>

          <p className="text-sm text-gray-500">
            Activities during school
          </p>

        </div>

      </div>

      {/* Timeline */}

      <div className="space-y-10">

        {alumni.organizations.map((item, index) => (

          <div
            key={index}
            className="relative flex gap-6"
          >

            {/* Timeline */}

            <div className="relative flex flex-col items-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                <Building2
                  size={20}
                  className="text-red-900"
                />

              </div>

              {index !== alumni.organizations.length - 1 && (

                <div className="mt-2 h-full w-px bg-gray-300" />

              )}

            </div>

            {/* Content */}

            <div className="flex-1 pb-6">

              <h3 className="text-lg font-semibold text-gray-900">

                {item.name}

              </h3>

              <p className="mt-1 text-red-900 font-medium">

                {item.role}

              </p>

              <p className="text-sm text-gray-500">

                {item.year}

              </p>

              <p className="mt-4 leading-7 text-gray-600">

                {item.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
    </Reveal>
  );
}