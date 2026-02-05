export default function Pagination() {
  return (
    <div className="flex justify-center mt-14 gap-2">
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          className={`w-10 h-10 rounded-lg ${
            n === 1
              ? "bg-primary text-white"
              : "bg-surface-dark hover:bg-surface-dark/80"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

