"use client";

import {
    ImagePlus,
    Building2,
    Upload
} from "lucide-react";

import UploadBox from "./UploadBox";

export default function BrandIdentityCard() {
    return (
        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-start gap-3">

                <Building2 className="mt-1 text-red-900" />

                <div>

                    <h2 className="text-2xl font-semibold">
                        Brand Identity
                    </h2>

                    <p className="text-sm text-slate-500">
                        Configure branding displayed on the public portal.
                    </p>

                </div>

            </div>

            <div className="space-y-6">

                <div>

                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Organization Name
                    </label>

                    <input
                        defaultValue="IKASA Alumni Portal"
                        className="w-full rounded-xl border bg-slate-50 px-4 py-3 outline-none transition focus:border-red-900"
                    />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <UploadBox
                        title="Organization Logo"
                        subtitle="PNG, JPG • Max 2MB"
                        icon={<Upload className="h-7 w-7" />}
                    />

                    <UploadBox
                        title="Hero Banner"
                        subtitle="1920 x 700 recommended"
                        icon={<ImagePlus className="h-7 w-7" />}
                    />

                </div>

            </div>

        </section>
    );
}