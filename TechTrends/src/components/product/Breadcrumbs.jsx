export default function Breadcrumbs() {
  const crumbs = ["Home", "Smartphones", "Flagship X1"];

  return (
    <nav className="px-4 lg:px-40 pt-6 pb-2 flex gap-2 text-sm">
      {crumbs.map((c, i) => (
        <span
          key={c}
          className={i === crumbs.length - 1
            ? "text-text-dark dark:text-white"
            : "text-text-muted-light hover:text-primary"}
        >
          {c}
          {i !== crumbs.length - 1 && " › "}
        </span>
      ))}
    </nav>
  );
}
