import { ReactNode } from "react";

interface Props {

    children: ReactNode;

}

export default function FormCard({ children }: Props) {

    return (

        <div className="mx-auto w-full max-w-3xl rounded-[24px] border border-slate-200 bg-white p-10 shadow-sm lg:p-16">

            {children}

        </div>

    );

}