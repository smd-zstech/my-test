interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        {badge ? <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{badge}</span> : null}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{description}</p>
      </div>
    </header>
  );
}
