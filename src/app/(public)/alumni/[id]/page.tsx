import AlumniProfile from "@/components/alumni/AlumniProfile";
import { alumni } from "@/data/data";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPage({ params }: Props) {
  const { id } = await params;

  const person = alumni.find(
    (item) => item.id === Number(id)
  );

  if (!person) {
    return (
      <div className="py-20 text-center">
        Alumni tidak ditemukan.
      </div>
    );
  }

  return (
    <AlumniProfile alumni={person} />
  );
}