export default function SocialAuth() {
  return (
    <div className="mt-8">

      {/* Divider */}
      <div className="relative">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#325167]" />
        </div>

        <div className="relative flex justify-center text-sm">
          <span className="bg-[#14202a] px-3 text-[#92b2c9] rounded-lg">
            Or continue with
          </span>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        <button className="flex items-center text-white justify-center gap-3 rounded-xl bg-[#192833] px-3 py-2.5 ring-1 ring-[#325167] hover:bg-[#233948]">
          Google
        </button>

        <button className="flex items-center text-white justify-center gap-3 rounded-xl bg-[#192833] px-3 py-2.5 ring-1 ring-[#325167] hover:bg-[#233948]">
          GitHub
        </button>

      </div>

    </div>
  );
}
