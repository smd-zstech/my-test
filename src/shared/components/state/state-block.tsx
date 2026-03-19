interface StateBlockProps {
  title: string;
  description: string;
}

export function StateBlock({ title, description }: StateBlockProps) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-slate-950/30 p-6 text-sm">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
}
