export default function LoginForm() {
  return (
    <form className="flex flex-col gap-5">

      {/* Email */}
      <label className="flex flex-col gap-2">

        <span className="text-sm font-medium">
          Email Address
        </span>

        <div className="relative">

          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted-light">
            <span className="material-symbols-outlined text-[20px]">
              mail
            </span>
          </span>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full h-12 rounded-lg border border-border-dark bg-surface-dark/50 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />

        </div>

      </label>

      {/* Password */}
      <label className="flex flex-col gap-2">

        <div className="flex justify-between">

          <span className="text-sm font-medium">
            Password
          </span>

          <a className="text-primary text-xs hover:opacity-80">
            Forgot Password?
          </a>

        </div>

        <div className="relative">

          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-muted-light">
            <span className="material-symbols-outlined text-[20px]">
              lock
            </span>
          </span>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-12 rounded-lg border border-border-dark bg-surface-dark/50 pl-11 pr-10 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />

          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted-light hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">
              visibility
            </span>
          </button>

        </div>

      </label>

      {/* Submit */}
      <button
        type="submit"
        className="h-12 rounded-lg bg-primary hover:bg-blue-500 font-bold tracking-wide shadow-lg shadow-primary/25 active:scale-[0.98] transition"
      >
        Sign In
      </button>

    </form>
  );
}
