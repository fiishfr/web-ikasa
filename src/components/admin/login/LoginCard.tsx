import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="relative z-10 w-full max-w-md rounded-3xl border border-blue-100 bg-white p-10 shadow-xl">

      <div className="mb-8 flex flex-col items-center">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">

          {/* nanti ganti logo */}

          <img
            src="/logo.png"
            alt="IKASA"
            className="h-10"
          />

        </div>

        <h1 className="text-2xl font-semibold text-red-900">
          IKASA Admin
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Secure Community Portal Access
        </p>

      </div>

      <LoginForm />

      <p className="mt-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
        Authorized Personnel Only
      </p>

    </div>
  );
}