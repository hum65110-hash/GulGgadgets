import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";


export default function LoginCard() {
  const navigate = useNavigate()
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

        <h1 className="text-3xl text-white font-bold tracking-tight">
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
        <span onClick={()=>navigate('/register')}
         className="text-white font-medium cursor-pointer hover:underline">
          Sign up for free
        </span>
      </p>

    </section>
  );
}
