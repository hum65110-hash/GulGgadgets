export default function SocialLogin() {
  return (
    <div className="grid grid-cols-2 gap-4">

      <button className="h-12 rounded-lg border border-border-dark bg-surface-dark/30 hover:bg-surface-dark hover:border-border-light-hover flex items-center justify-center gap-2 transition">

        Google

      </button>

      <button className="h-12 rounded-lg border border-border-dark bg-surface-dark/30 hover:bg-surface-dark hover:border-border-light-hover flex items-center justify-center gap-2 transition">

        Apple

      </button>

    </div>
  );
}
