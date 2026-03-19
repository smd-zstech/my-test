import { useMemo } from 'react';
import { AppFrame } from '@/shell/components/app-frame/app-frame';
import { NotificationCenter } from '@/shell/components/notification-center/notification-center';
import { JobCenter } from '@/shell/components/job-center/job-center';
import { PageHeader } from '@/shared/components/page-header/page-header';
import { Card } from '@/shared/components/ui/card';
import { SummaryTable } from '@/shared/components/data-table/summary-table';
import { DetailPanel } from '@/shared/components/detail-panel/detail-panel';
import { JsonViewer } from '@/shared/components/json-viewer/json-viewer';
import { useShellUiStore } from '@/shell/store/shell-ui.store';
import { useOktaUiStore } from '@/workspaces/okta/store/okta-ui.store';
import type { JobRecord, NavigationItem } from '@/shared/types/common';

const oktaNavigation: NavigationItem[] = [
  { id: 'home', label: 'Home', description: 'Okta-only summary and connection posture.' },
  { id: 'connections', label: 'Connections', description: 'Scoped OAuth connection profile and test surface.' },
  { id: 'users', label: 'Users', description: 'User management, lifecycle, and raw JSON tabs.' },
  { id: 'groups', label: 'Groups', description: 'Group detail, membership, and audit.' },
  { id: 'applications', label: 'Applications', description: 'Application list and assignment relationship views.' },
  { id: 'directories', label: 'Directories', description: 'Officially supported directory and import visibility.' },
  { id: 'activity', label: 'Activity', description: 'System Log-based Okta activity feed.' }
];

const jobs: JobRecord[] = [
  { id: 'o-job-1', title: 'Scoped OAuth validation', state: 'success', summary: 'Scopes for users, groups, and apps validated.', updatedAt: 'now' },
  { id: 'o-job-2', title: 'Directory import snapshot', state: 'running', summary: 'Placeholder read-only job state for Directories.', updatedAt: 'now' }
];

export function OktaWorkspace() {
  const { activeWorkspace, theme, setWorkspace, toggleTheme } = useShellUiStore();
  const { activePage, setActivePage } = useOktaUiStore();
  const activeNav = useMemo(() => oktaNavigation.find((item) => item.id === activePage) ?? oktaNavigation[0], [activePage]);

  return (
    <AppFrame
      workspace={activeWorkspace}
      theme={theme}
      navigationTitle="Okta Workspace"
      navigationItems={oktaNavigation}
      activeItemId={activePage}
      onWorkspaceChange={setWorkspace}
      onThemeToggle={toggleTheme}
      onNavSelect={setActivePage}
      jobs={jobs}
      secondaryPanel={
        <>
          <NotificationCenter />
          <JobCenter jobs={jobs} />
          <DetailPanel>
            <p className="text-sm font-semibold">Current Okta Context</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <p>Active page: {activeNav.label}</p>
              <p>Search, detail panels, and activity stay inside the Okta domain only.</p>
            </div>
          </DetailPanel>
        </>
      }
    >
      <PageHeader
        badge="Okta Workspace"
        title="Independent Okta admin workspace"
        description="This MVP keeps Okta users, groups, applications, directories, and activity flows isolated from every Zscaler route, cache, and state store."
      />
      <Card title={activeNav.label} eyebrow="Current Domain View">
        <p className="mb-4 text-sm text-muted">{activeNav.description}</p>
        <SummaryTable
          columns={[
            { header: 'Object', cell: (row) => row.object },
            { header: 'State', cell: (row) => row.state },
            { header: 'Context', cell: (row) => row.context },
            { header: 'Last Seen', cell: (row) => row.lastSeen }
          ]}
          rows={[
            { object: 'Admin OAuth profile', state: 'Healthy', context: 'Scoped access', lastSeen: '2026-03-19' },
            { object: 'System Log stream', state: 'Ready', context: 'Audit-only', lastSeen: '2026-03-19' }
          ]}
        />
      </Card>
      <Card title="Raw JSON tab" eyebrow="Okta only">
        <JsonViewer
          data={{
            workspace: 'okta',
            activePage,
            capabilities: ['users.read', 'groups.read', 'apps.read'],
            caution: 'Mutating bulk actions remain placeholder-only in MVP.'
          }}
        />
      </Card>
    </AppFrame>
  );
}
