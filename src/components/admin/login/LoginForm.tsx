"use client";

import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">

      <div>

        <label className="mb-2 block text-sm font-medium">
          Username
        </label>

        <div className="relative">

          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            placeholder="Username"
            className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-red-900"
          />

        </div>

      </div>

      <div>

        <div className="mb-2 flex justify-between">

          <label className="text-sm font-medium">
            Password
          </label>

          <button
            type="button"
            className="text-xs font-semibold text-red-900"
          >
            Lupa Password?
          </button>

        </div>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-10 outline-none transition focus:border-red-900"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      <label className="flex items-center gap-2 text-sm">

        <input type="checkbox" />

        Ingat saya di perangkat ini

      </label>

      <button
        className="w-full rounded-xl bg-red-900 py-3 font-medium text-white transition hover:bg-red-800"
      >
        Masuk ke Panel Admin
      </button>

    </form>
  );
}