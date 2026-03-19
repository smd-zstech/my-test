interface ConfirmCalloutProps {
  title: string;
  body: string;
}

export function ConfirmCallout({ title, body }: ConfirmCalloutProps) {
  return (
    <div className="rounded-2xl border border-warning/50 bg-warning/10 p-4 text-sm text-slate-200">
      <p className="font-semibold text-warning">{title}</p>
      <p className="mt-2 text-muted">{body}</p>
    </div>
  );
}
