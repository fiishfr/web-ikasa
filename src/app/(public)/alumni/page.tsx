"use client";

import { useState } from "react";
import AlumniGrid from "@/components/alumni/AlumniGrid";
import AlumniDirectory from "@/components/alumni/AlumniDirectory";

export default function AlumniPage() {
  return (
    <main className="py-0">
        <AlumniDirectory />
    </main>
  );
}