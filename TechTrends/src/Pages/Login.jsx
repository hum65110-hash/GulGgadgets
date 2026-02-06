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


