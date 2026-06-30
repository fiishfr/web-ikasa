export default function Loading() {
  return (
    <div className="p-8 space-y-6">

      <div className="h-10 w-72 rounded bg-gray-200 animate-pulse"/>

      <div className="grid md:grid-cols-3 gap-6">

        {Array.from({length:6}).map((_,i)=>(
          <div
            key={i}
            className="h-72 rounded-xl bg-gray-200 animate-pulse"
          />
        ))}

      </div>

    </div>
  )
}