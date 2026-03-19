import type { ReactNode } from 'react';
import { Topbar } from '@/shell/components/topbar/topbar';
import { SidebarHost } from '@/shell/components/sidebar-host/sidebar-host';
import type { NavigationItem, WorkspaceId, JobRecord } from '@/shared/types/common';

interface AppFrameProps {
  workspace: WorkspaceId;
  theme: 'dark' | 'light';
  navigationTitle: string;
  navigationItems: NavigationItem[];
  activeItemId: string;
  onWorkspaceChange: (workspace: WorkspaceId) => void;
  onThemeToggle: () => void;
  onNavSelect: (id: string) => void;
  jobs: JobRecord[];
  children: ReactNode;
  secondaryPanel: ReactNode;
}

export function AppFrame(props: AppFrameProps) {
  const {
    workspace,
    theme,
    navigationTitle,
    navigationItems,
    activeItemId,
    onWorkspaceChange,
    onThemeToggle,
    onNavSelect,
    children,
    secondaryPanel
  } = props;

  return (
    <div className="flex min-h-screen flex-col">
      <Topbar
        workspace={workspace}
        theme={theme}
        onWorkspaceChange={onWorkspaceChange}
        onThemeToggle={onThemeToggle}
      />
      <div className="flex flex-1">
        <SidebarHost
          title={navigationTitle}
          items={navigationItems}
          activeItemId={activeItemId}
          onSelect={onNavSelect}
        />
        <main className="grid flex-1 grid-cols-[minmax(0,1fr)_360px] gap-6 p-6">
          <div className="space-y-6">{children}</div>
          <div className="space-y-6">{secondaryPanel}</div>
        </main>
      </div>
    </div>
  );
}
