import { ReactNode } from "react";

interface Props {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

export default function UploadBox({
    title,
    subtitle,
    icon,
}: Props) {
    return (
        <label className="group flex h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-red-900 hover:bg-red-50">

            <div className="rounded-full bg-red-100 p-4 text-red-900">
                {icon}
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                {subtitle}
            </p>

            <input
                type="file"
                className="hidden"
            />

        </label>
    );
}