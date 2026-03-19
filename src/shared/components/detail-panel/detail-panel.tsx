import type { PropsWithChildren } from 'react';

export function DetailPanel({ children }: PropsWithChildren) {
  return <aside className="rounded-2xl border border-border bg-slate-950/50 p-5">{children}</aside>;
}
