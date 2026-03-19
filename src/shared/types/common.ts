export type WorkspaceId = 'zscaler' | 'okta';
export type ThemeMode = 'dark' | 'light';

export interface NavigationItem {
  id: string;
  label: string;
  description: string;
}

export interface ActivityRecord {
  id: string;
  title: string;
  description: string;
  status: 'success' | 'warning' | 'error' | 'info';
  timestamp: string;
}

export interface JobRecord {
  id: string;
  title: string;
  state: 'queued' | 'running' | 'success' | 'failed';
  summary: string;
  updatedAt: string;
}
