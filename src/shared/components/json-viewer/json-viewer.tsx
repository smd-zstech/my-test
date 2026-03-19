interface JsonViewerProps {
  data: unknown;
}

export function JsonViewer({ data }: JsonViewerProps) {
  return (
    <pre className="max-h-80 overflow-auto rounded-2xl border border-border bg-slate-950/60 p-4 text-xs text-slate-200">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
