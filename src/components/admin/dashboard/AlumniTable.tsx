"use client";

import { Search, Check, Trash2, Pencil } from "lucide-react";
import { alumniData } from "./data";

export default function AlumniTable() {
  return (
    <section className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-stone-200 p-6 lg:flex-row lg:items-center lg:justify-between">

        <h2 className="text-2xl font-semibold text-gray-900">
          Alumni Management
        </h2>

        <div className="flex flex-wrap items-center gap-3">

          <button className="flex items-center gap-2 rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-blue-200">
            <Check size={16} />
            Approve Selected
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
            <Trash2 size={16} />
            Delete Selected
          </button>

          <div className="relative">

            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search alumni..."
              className="rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-red-900"
            />

          </div>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">

              <th className="px-6 py-4">
                <input type="checkbox" />
              </th>

              <th className="px-6 py-4">
                Photo & Name
              </th>

              <th className="px-6 py-4">
                Grad Year
              </th>

              <th className="px-6 py-4">
                University
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4 text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {alumniData.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5">
                  <input type="checkbox" />
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-semibold text-slate-700">
                      {item.name.charAt(0)}
                    </div>

                    <span className="font-medium">
                      {item.name}
                    </span>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {item.year}
                </td>

                <td className="px-6 py-5">
                  {item.university}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Pending"
                        ? "bg-sky-100 text-sky-900"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-3">

                    <button className="text-red-900 hover:scale-110">
                      <Check size={18} />
                    </button>

                    <button className="text-gray-600 hover:scale-110">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-600 hover:scale-110">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex flex-col gap-4 border-t border-stone-200 p-4 md:flex-row md:items-center md:justify-between">

        <p className="text-sm text-gray-600">
          Showing 1 to 3 of 1,248 entries
        </p>

        <div className="flex gap-2">

          <button className="h-8 w-8 rounded bg-red-900 text-white">
            1
          </button>

          <button className="h-8 w-8 rounded hover:bg-gray-100">
            2
          </button>

          <button className="h-8 w-8 rounded hover:bg-gray-100">
            3
          </button>

          <button className="h-8 w-8 rounded hover:bg-gray-100">
            ...
          </button>

        </div>

      </div>

    </section>
  );
}