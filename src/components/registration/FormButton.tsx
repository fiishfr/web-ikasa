import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function FormButton({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-8 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-red-900 text-white hover:bg-red-800"
          : "border border-red-900 text-red-900 hover:bg-red-50",
        className
      )}
    />
  );
}