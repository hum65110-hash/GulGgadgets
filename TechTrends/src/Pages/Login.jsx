import LoginCard from "../components/auth/LoginCard";

export default function Login() {
  return (
    <main className="relative flex-1 flex items-center justify-center p-4 py-10">

      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <LoginCard />

    </main>
  );
}

components/auth/LoginCard.jsx
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

export default function LoginCard() {
  return (
    <section
      className="relative z-10 w-full max-w-[480px] rounded-2xl p-8 md:p-10 flex flex-col gap-6 border backdrop-blur-xl"
      style={{
        background: "var(--color-glass-bg)",
        borderColor: "var(--color-glass-border)",
        boxShadow: "var(--shadow-glass-panel)",
      }}
    >
      {/* Header */}
      <header className="text-center space-y-2">

        <h1 className="text-3xl font-bold tracking-tight">
          Welcome Back
        </h1>

        <p className="text-text-muted-light text-sm">
          Enter your credentials to access your account.
        </p>

      </header>

      <LoginForm />

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border-dark" />
        <span className="text-xs uppercase tracking-wider text-text-muted-light">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-border-dark" />
      </div>

      <SocialLogin />

      <p className="text-center text-xs text-text-muted-light">
        Don’t have an account?{" "}
        <a className="text-white font-medium hover:underline">
          Sign up for free
        </a>
      </p>

    </section>
  );
}
