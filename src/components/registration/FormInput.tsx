interface Props {

    label: string;

    placeholder?: string;

    type?: string;

    value: string;

    onChange: (value: string) => void;

}

export default function FormInput({

    label,

    placeholder,

    type = "text",

    value,

    onChange,

}: Props) {

    return (

        <div className="space-y-2">

            <label className="text-sm font-medium text-slate-700">

                {label}

            </label>

            <input

                type={type}

                value={value}

                placeholder={placeholder}

                onChange={(e) => onChange(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 outline-none transition focus:border-red-900 focus:bg-white"

            />

        </div>

    );

}