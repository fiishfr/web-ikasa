import AlumniCard from "./AlumniCard";
import { Alumni } from "@/types/alumni";

type Props = {
  alumni: Alumni[];
};

export default function AlumniGrid({
  alumni,
}: Props) {

  return (

    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {alumni.map((item) => (

        <AlumniCard
          key={item.id}
          alumni={item}
        />

      ))}

    </div>

  );
}