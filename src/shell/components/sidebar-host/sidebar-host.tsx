import type { NavigationItem } from '@/shared/types/common';
import { cn } from '@/shared/utils/cn';

interface SidebarHostProps {
  title: string;
  items: NavigationItem[];
  activeItemId: string;
  onSelect: (id: string) => void;
}

export function SidebarHost({ title, items, activeItemId, onSelect }: SidebarHostProps) {
  return (
    <aside className="flex h-full w-80 flex-col border-r border-border bg-slate-950/50 p-5">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Workspace Navigation</p>
        <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      </div>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              'w-full rounded-2xl border px-4 py-3 text-left transition',
              activeItemId === item.id
                ? 'border-accent bg-accent/10 text-white'
                : 'border-transparent bg-white/0 text-muted hover:border-border hover:text-foreground'
            )}
            onClick={() => onSelect(item.id)}
            type="button"
          >
            <div className="font-medium">{item.label}</div>
            <div className="mt-1 text-xs leading-5 text-muted">{item.description}</div>
          </button>
        ))}
      </nav>
    </aside>
  );
}
