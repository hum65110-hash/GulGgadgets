export default function AboutHero() {
  return (
    <section className="relative min-h-[480px] rounded-xl overflow-hidden flex items-center justify-center text-center p-8">

      <div className="absolute inset-0 bg-background-dark/80" />

      <div className="relative z-10 max-w-[700px] space-y-4">

        <h1 className="text-white text-4xl md:text-6xl font-black">
          Redefining Tech Excellence
        </h1>

        <p className="text-gray-soft text-lg md:text-xl">
          At GulfGadgets, our mission is to bring the future of technology to your doorstep.
        </p>

        <button className="bg-primary text-white px-8 h-12 rounded-lg font-bold hover:scale-105 transition">
          Explore Our Story
        </button>

      </div>
    </section>
  );
}
