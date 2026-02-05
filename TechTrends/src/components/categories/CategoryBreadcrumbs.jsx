export default function CategoryBreadcrumbs() {
  return (
    <nav className="flex flex-wrap gap-2 px-4 py-2 text-sm">
      <span className="text-text-muted-light hover:text-primary">
        Home
      </span>
      <span className="text-slate-muted">/</span>
      <span className="font-medium text-slate-500">Categories</span>
    </nav>
  );
}
