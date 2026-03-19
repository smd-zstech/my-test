import type { ThemeMode, WorkspaceId } from '@/shared/types/common';

export interface AppSettings {
  defaultWorkspace: WorkspaceId;
  theme: ThemeMode;
}

export const defaultSettings: AppSettings = {
  defaultWorkspace: 'zscaler',
  theme: 'dark'
};

export const settingsRepository = {
  getSettings: async (): Promise<AppSettings> => defaultSettings
};
