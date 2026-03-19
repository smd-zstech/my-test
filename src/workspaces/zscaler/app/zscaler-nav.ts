import type { NavigationItem } from '@/shared/types/common';
import type { ZscalerProductArea } from '@/workspaces/zscaler/shared/types/zscaler';

const ziaNav: NavigationItem[] = [
  { id: 'home', label: 'Home', description: 'ZIA-only overview and connection posture.' },
  { id: 'connections', label: 'Connections', description: 'OneAPI + Zidentity auth profile and capability checks.' },
  { id: 'policies', label: 'Policies', description: 'ZIA policy list, detail panel, and export-ready review.' },
  { id: 'change-review', label: 'Change Review', description: 'Diff, preview, and apply checkpoints for ZIA changes.' },
  { id: 'jobs', label: 'Jobs', description: 'Activation and long-running task history for ZIA only.' },
  { id: 'activity', label: 'Activity', description: 'ZIA-only audit and activity timeline.' }
];

const zpaNav: NavigationItem[] = [
  { id: 'home', label: 'Home', description: 'ZPA application access posture and summaries.' },
  { id: 'connections', label: 'Connections', description: 'ZPA OneAPI connectivity and capability state.' },
  { id: 'application-segments', label: 'Application Segments', description: 'Segment inventory and side detail navigation.' },
  { id: 'segment-groups', label: 'Segment Groups', description: 'Read-focused segment group management surface.' },
  { id: 'access-policies', label: 'Access Policies', description: 'Policy listing and change review entry points.' },
  { id: 'jobs', label: 'Jobs', description: 'Product-specific background task center for ZPA.' },
  { id: 'activity', label: 'Activity', description: 'ZPA-only audit trail and operator history.' }
];

const clientConnectorNav: NavigationItem[] = [
  { id: 'home', label: 'Home', description: 'Client Connector posture summary and API mode visibility.' },
  { id: 'connections', label: 'Connections', description: 'Public API or OneAPI profile validation for Client Connector.' },
  { id: 'app-profiles', label: 'App Profiles', description: 'Profile list and platform-specific metadata.' },
  { id: 'device-posture', label: 'Device Posture', description: 'Read-oriented posture definitions and status.' },
  { id: 'public-api', label: 'Public API', description: 'Credential metadata, session validity, and API mode.' },
  { id: 'jobs', label: 'Jobs', description: 'Connector-specific long-running operations.' },
  { id: 'activity', label: 'Activity', description: 'Client Connector audit and operator activity only.' }
];

export function getZscalerNavigation(productArea: ZscalerProductArea): NavigationItem[] {
  switch (productArea) {
    case 'zpa':
      return zpaNav;
    case 'client_connector':
      return clientConnectorNav;
    case 'zia':
    default:
      return ziaNav;
  }
}
