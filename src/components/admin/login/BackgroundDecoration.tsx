export default function BackgroundDecoration() {
  return (
    <>
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50" />

      <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-rose-200 blur-3xl opacity-20" />

      <div className="absolute left-0 bottom-0 h-[450px] w-62.5 bg-linear-to-t from-blue-100/30 to-transparent" />
    </>
  );
}