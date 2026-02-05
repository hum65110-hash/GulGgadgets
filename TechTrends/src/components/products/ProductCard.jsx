export default function ProductCard() {
  return (
    <div className="group bg-surface-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/30 hover:-translate-y-1 transition">

      <div className="relative aspect-[4/3] bg-background-dark/50 p-6 flex items-center justify-center">

        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-dark/80 hover:bg-white hover:text-primary text-white flex items-center justify-center">
          <span className="material-symbols-outlined text-[18px]">
            favorite
          </span>
        </button>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyI9wHgQMKBmGZu1n4VLFaDnht81jTXp69LlGU9XxbY0chxMn_zmoFj1VNH5Ouk8-Pw8prdEFWUNu0h_cRSAANFZOWYHxTrtZ_3P2r2798ZXZdhKKhnz6aRVH6pb1gIU3U2PcB-y9hndkkpmjHran40m_18BvytltJI3dlFmBR4GMOLwYFj6kqwhXmRHpcFO0z6RajxYRV0ImM9AYKaWdMEhkycyzUam9-zy7V_mG4imyAzUmWTnm7pb32q_oor3Plyb9R-vI2b8H3"
          className="object-contain group-hover:scale-105 transition"
        />

      </div>

      <div className="p-4 space-y-3">

        <div className="text-xs uppercase text-text-secondary">Alienware</div>

        <h3 className="font-bold text-lg group-hover:text-primary">
          Alienware x16 R1 Gaming Laptop
        </h3>

        <div className="flex gap-2">
          {["Core i9", "32GB", "1TB"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-background-dark border border-steel-blue px-2 py-0.5 rounded text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-end pt-2">

          <div>
            <p className="text-text-secondary text-xs line-through">$3299</p>
            <p className="text-primary text-xl font-bold">$2899</p>
          </div>

          <button className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>

        </div>
      </div>
    </div>
  );
}

