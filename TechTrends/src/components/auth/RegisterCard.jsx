import RegisterForm from "./RegisterForm";
import SocialAuth from "./SocialAuth";

export default function RegisterCard() {
  return (
    <div className="rounded-2xl p-8 sm:p-10 glass-card">

      {/* Header */}
      <div className="mb-8 text-center flex flex-col gap-2">

        <div className="mx-auto size-12 rounded-full bg-[#192833] border border-[#325167] flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">
            person_add
          </span>
        </div>

        <h1 className="text-[32px] font-bold">
          Create Account
        </h1>

        <p className="text-[#92b2c9]">
          Join the future of tech and access exclusive gadgets.
        </p>

      </div>

      <RegisterForm />

      <SocialAuth />

    </div>
  );
}
