"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsHeader() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Portal Settings
        </h1>

        <p className="mt-2 text-slate-600">
          Manage organization identity and contact information.
        </p>

      </div>

      <Button
        className="rounded-xl bg-red-900 hover:bg-red-800"
        size="lg"
      >
        <Save className="mr-2 h-4 w-4" />
        Save Changes
      </Button>

    </div>
  );
}