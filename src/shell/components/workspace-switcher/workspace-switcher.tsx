import type { WorkspaceId } from '@/shared/types/common';
import { cn } from '@/shared/utils/cn';

interface WorkspaceSwitcherProps {
  value: WorkspaceId;
  onChange: (workspace: WorkspaceId) => void;
}

const items: Array<{ id: WorkspaceId; label: string }> = [
  { id: 'zscaler', label: 'Zscaler Workspace' },
  { id: 'okta', label: 'Okta Workspace' }
];

export function WorkspaceSwitcher({ value, onChange }: WorkspaceSwitcherProps) {
  return (
    <div className="inline-flex rounded-2xl border border-border bg-slate-950/60 p-1">
      {items.map((item) => (
        <button
          key={item.id}
          className={cn(
            'rounded-xl px-4 py-2 text-sm font-medium transition',
            value === item.id ? 'bg-accent text-white' : 'text-muted hover:text-foreground'
          )}
          onClick={() => onChange(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
