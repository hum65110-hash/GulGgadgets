import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-5">

      <InputField
        id="fullname"
        label="Full Name"
        icon="person"
        placeholder="Enter your full name"
      />

      <InputField
        id="email"
        label="Email Address"
        icon="mail"
        placeholder="name@example.com"
        type="email"
      />

      <InputField
        id="phone"
        label="Phone Number"
        icon="call"
        placeholder="+1 (555) 000-0000"
      />

      {/* Password */}
      <div className="flex flex-col gap-2">

        <label
          htmlFor="password"
          className="text-sm font-medium ml-1"
        >
          Password
        </label>

        <div className="relative">

          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#92b2c9]">
            lock
          </span>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            className="w-full h-12 rounded-xl bg-[#192833] border border-[#325167] pl-12 pr-12 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />

          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#92b2c9] hover:text-white"
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </button>

        </div>

        <p className="text-xs text-[#586e7e] ml-1">
          Must be at least 8 characters.
        </p>

      </div>

      {/* Terms */}
      <div className="flex items-start gap-3 mt-2 px-1">

        <input
          id="terms"
          type="checkbox"
          className="h-5 w-5 rounded border-[#325167] bg-[#192833] text-primary"
        />

        <label
          htmlFor="terms"
          className="text-sm text-[#92b2c9]"
        >
          I agree to the{" "}
          <span className="text-primary hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-primary hover:underline">
            Privacy Policy
          </span>
          .
        </label>

      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 h-12 rounded-xl bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20"
      >
        Create Account
      </button>

    </form>
  );
}

/* ------------------ */

function InputField({
  id,
  label,
  icon,
  placeholder,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">

      <label
        htmlFor={id}
        className="text-sm font-medium ml-1"
      >
        {label}
      </label>

      <div className="relative">

        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#92b2c9]">
          {icon}
        </span>

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full h-12 rounded-xl bg-[#192833] border border-[#325167] pl-12 pr-4 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />

      </div>

    </div>
  );
}
