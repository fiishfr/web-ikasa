"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

interface Props {
  onFileChange: (file: File | null) => void;
}

export default function UploadBanner({
  onFileChange,
}: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    onFileChange(file);
  }

  return (
    <div className="space-y-4">

      <label className="font-semibold">
        Banner Event
      </label>

      <label
        htmlFor="banner"
        className="flex h-64 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300"
      >
        {preview ? (
          <Image
            src={preview}
            alt="preview"
            width={900}
            height={400}
            className="h-full w-full rounded-xl object-cover"
          />
        ) : (
          <div className="text-center">

            <p className="text-lg font-semibold">
              Upload Banner
            </p>

            <p className="text-sm text-gray-500">
              JPG, PNG maksimal 5MB
            </p>

          </div>
        )}
      </label>

      <input
        id="banner"
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

    </div>
  );
}