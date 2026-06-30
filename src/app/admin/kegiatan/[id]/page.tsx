import EventForm from "../components/EventForm";

type Props = {
  params: {
    id: string;
  };
};

export default function EditEventPage({ params }: Props) {
  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">
        Edit Event
      </h1>

      <EventForm eventId={params.id} />
    </div>
  );
}