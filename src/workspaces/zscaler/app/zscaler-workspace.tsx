import { useMemo, useState } from 'react';
import { AppFrame } from '@/shell/components/app-frame/app-frame';
import { NotificationCenter } from '@/shell/components/notification-center/notification-center';
import { JobCenter } from '@/shell/components/job-center/job-center';
import { Card } from '@/shared/components/ui/card';
import { PageHeader } from '@/shared/components/page-header/page-header';
import { SummaryTable } from '@/shared/components/data-table/summary-table';
import { DetailPanel } from '@/shared/components/detail-panel/detail-panel';
import { JsonViewer } from '@/shared/components/json-viewer/json-viewer';
import { ConfirmCallout } from '@/shared/components/confirm-dialog/confirm-callout';
import { StateBlock } from '@/shared/components/state/state-block';
import { useShellUiStore } from '@/shell/store/shell-ui.store';
import { getZscalerNavigation } from '@/workspaces/zscaler/app/zscaler-nav';
import { useZscalerShellStore } from '@/workspaces/zscaler/shared/store/zscaler-shell.store';
import { ZscalerProductSwitcher } from '@/workspaces/zscaler/app/zscaler-product-switcher';
import type { JobRecord } from '@/shared/types/common';
import type { ZscalerProductArea } from '@/workspaces/zscaler/shared/types/zscaler';

const jobs: JobRecord[] = [
  { id: 'z-job-1', title: 'Capability discovery', state: 'success', summary: 'OneAPI profile validated for ZIA read scope.', updatedAt: 'now' },
  { id: 'z-job-2', title: 'Client Connector sync', state: 'queued', summary: 'Placeholder job for future connector metadata sync.', updatedAt: 'now' }
];

const productContent: Record<ZscalerProductArea, { title: string; description: string; table: Array<Record<string, string>>; detail: Record<string, unknown>; confirm: string }> = {
  zia: {
    title: 'ZIA Console',
    description: 'ZIA remains isolated inside the Zscaler workspace. Policies, audit, jobs, and connection state are kept ZIA-only.',
    table: [
      { object: 'Internet Access Policy', status: 'Draft review', scope: 'All users', modified: '2026-03-19' },
      { object: 'URL Category Control', status: 'Active', scope: 'HQ sites', modified: '2026-03-18' }
    ],
    detail: {
      capability: 'supportsZiaRead=true',
      auth: 'OneAPI + Zidentity',
      notes: ['Dry-run is CHECK REQUIRED until official endpoint validation is complete.']
    },
    confirm: 'Any future policy mutation must flow through local validation, diff review, and explicit operator confirmation.'
  },
  zpa: {
    title: 'ZPA Console',
    description: 'ZPA remains isolated from ZIA and Client Connector. Application segments, segment groups, and access policies stay in a dedicated domain module.',
    table: [
      { object: 'Finance Segment', status: 'Healthy', scope: 'Segment Group A', modified: '2026-03-19' },
      { object: 'Privileged Access Policy', status: 'Review', scope: 'Privileged users', modified: '2026-03-17' }
    ],
    detail: {
      capability: 'supportsZpaRead=true',
      auth: 'OneAPI + Zidentity',
      notes: ['Connector health write paths remain CHECK REQUIRED until official API coverage is confirmed.']
    },
    confirm: 'ZPA object relationships stay in ZPA-specific detail views only. No shared object browser is introduced.'
  },
  client_connector: {
    title: 'Client Connector Console',
    description: 'Client Connector gets its own product area with dedicated connections, profile views, device posture, and public API metadata.',
    table: [
      { object: 'Windows App Profile', status: 'Published', scope: 'Managed devices', modified: '2026-03-19' },
      { object: 'Posture Policy - Disk Encryption', status: 'Read-only', scope: 'Endpoint posture', modified: '2026-03-16' }
    ],
    detail: {
      capability: 'supportsClientConnectorRead=true',
      auth: 'Public API or OneAPI (CHECK REQUIRED)',
      notes: ['MVP keeps this surface read-focused until the auth contract is validated against official docs.']
    },
    confirm: 'Client Connector stays a separate console and is never rendered as a child menu under ZIA or ZPA pages.'
  }
};

export function ZscalerWorkspace() {
  const { activeWorkspace, theme, setWorkspace, toggleTheme } = useShellUiStore();
  const { activeProductArea, setActiveProductArea } = useZscalerShellStore();
  const [activeNavItem, setActiveNavItem] = useState('home');
  const navigationItems = useMemo(() => getZscalerNavigation(activeProductArea), [activeProductArea]);
  const content = productContent[activeProductArea];

  return (
    <AppFrame
      workspace={activeWorkspace}
      theme={theme}
      navigationTitle="Zscaler Workspace"
      navigationItems={navigationItems}
      activeItemId={activeNavItem}
      onWorkspaceChange={setWorkspace}
      onThemeToggle={toggleTheme}
      onNavSelect={setActiveNavItem}
      jobs={jobs}
      secondaryPanel={
        <>
          <NotificationCenter />
          <JobCenter jobs={jobs} />
          <DetailPanel>
            <p className="text-sm font-semibold">Product Detail</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <p>Active product area: {activeProductArea}</p>
              <p>Active navigation item: {activeNavItem}</p>
            </div>
          </DetailPanel>
        </>
      }
    >
      <PageHeader
        badge="Zscaler Workspace"
        title="Independent Zscaler product consoles"
        description="This MVP keeps ZIA, ZPA, and Client Connector isolated under a shared desktop shell while preserving provider-specific routes, state, and service boundaries."
      />
      <Card eyebrow="Product Context" action={<ZscalerProductSwitcher value={activeProductArea} onChange={(value) => { setActiveProductArea(value); setActiveNavItem('home'); }} />}>
        <p className="text-sm text-muted">Use the product switcher to move between ZIA, ZPA, and Client Connector without mixing objects, state, or workflows.</p>
      </Card>
      <Card title={content.title} eyebrow="MVP Domain Surface">
        <p className="mb-4 text-sm text-muted">{content.description}</p>
        <SummaryTable
          columns={[
            { header: 'Object', cell: (row) => row.object },
            { header: 'Status', cell: (row) => row.status },
            { header: 'Scope', cell: (row) => row.scope },
            { header: 'Modified', cell: (row) => row.modified }
          ]}
          rows={content.table}
        />
      </Card>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Card title="Raw capability snapshot" eyebrow="Provider-specific JSON">
          <JsonViewer data={content.detail} />
        </Card>
        <Card title="Operator guardrail" eyebrow="Confirmation pattern">
          <ConfirmCallout title="Dangerous operations require two-step confirmation" body={content.confirm} />
        </Card>
      </div>
      <StateBlock title="CHECK REQUIRED boundaries remain visible" description="Official Zscaler API verification is still required for dry-run, activation nuance, backup/export endpoints, and Client Connector OneAPI parity. The UI intentionally labels those surfaces as pending validation." />
    </AppFrame>
  );
}
