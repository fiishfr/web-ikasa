import { alumni } from "./data";
import AlumniRow from "./AlumniRow";

export default function AlumniTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                Alumni Profil
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                Tahun
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                Universitas
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {alumni.map((item) => (
              <AlumniRow key={item.id} alumni={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}