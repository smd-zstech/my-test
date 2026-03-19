import { Bell, BriefcaseBusiness } from 'lucide-react';
import { WorkspaceSwitcher } from '@/shell/components/workspace-switcher/workspace-switcher';
import { ThemeToggle } from '@/shell/components/theme-toggle/theme-toggle';
import type { WorkspaceId } from '@/shared/types/common';

interface TopbarProps {
  workspace: WorkspaceId;
  theme: 'dark' | 'light';
  onWorkspaceChange: (workspace: WorkspaceId) => void;
  onThemeToggle: () => void;
}

export function Topbar({ workspace, theme, onWorkspaceChange, onThemeToggle }: TopbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">Admin Workspace Shell</p>
          <p className="text-xs text-muted">Strict workspace isolation for desktop operations</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <WorkspaceSwitcher value={workspace} onChange={onWorkspaceChange} />
        <button type="button" className="rounded-xl border border-border p-2 text-muted hover:text-foreground">
          <Bell className="h-4 w-4" />
        </button>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </div>
  );
}
