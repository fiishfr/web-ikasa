"use client";

import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaInstagram,
} from "react-icons/fa6"

const fields = [
    {
        label: "Email Address",
        icon: Mail,
        value: "info@ikasa-alumni.org",
    },
    {
        label: "WhatsApp Number",
        icon: Phone,
        value: "+62 812 3456 7890",
    },
    {
        label: "Instagram",
        icon: FaInstagram,
        value: "@ikasa_alumni",
    },
    {
        label: "Address",
        icon: MapPin,
        value:
            "Jl. Ahmad Yani No.15\nPurwokerto\nJawa Tengah",
        textarea: true,
    },
];

export default function ContactInfoCard() {
    return (
        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="mb-8">

                <h2 className="text-2xl font-semibold">
                    Contact Information
                </h2>

                <p className="text-sm text-slate-500">
                    Displayed on the footer and contact page.
                </p>

            </div>

            <div className="space-y-6">

                {fields.map((field) => {

                    const Icon = field.icon;

                    return (
                        <div key={field.label}>

                            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
                                {field.label}
                            </label>

                            <div className="relative">

                                <Icon className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />

                                {field.textarea ? (
                                    <textarea
                                        rows={4}
                                        defaultValue={field.value}
                                        className="w-full rounded-xl border bg-slate-50 py-3 pl-12 pr-4 outline-none focus:border-red-900"
                                    />
                                ) : (
                                    <input
                                        defaultValue={field.value}
                                        className="w-full rounded-xl border bg-slate-50 py-3 pl-12 pr-4 outline-none focus:border-red-900"
                                    />
                                )}

                            </div>

                        </div>
                    );

                })}

            </div>

        </section>
    );
}