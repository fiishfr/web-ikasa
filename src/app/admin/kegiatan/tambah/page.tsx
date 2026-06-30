import EventForm from "../components/EventForm";

export default function TambahEventPage() {
  async function handleCreate(data: any) {
    console.log(data);

    // Nanti kita ganti dengan Supabase
  }

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">
        Tambah Event
      </h1>

      <EventForm onSubmit={handleCreate} />
    </div>
  );
}