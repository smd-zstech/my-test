import { create } from 'zustand';
import type { ThemeMode, WorkspaceId } from '@/shared/types/common';

interface ShellUiState {
  activeWorkspace: WorkspaceId;
  theme: ThemeMode;
  setWorkspace: (workspace: WorkspaceId) => void;
  toggleTheme: () => void;
}

export const useShellUiStore = create<ShellUiState>((set) => ({
  activeWorkspace: 'zscaler',
  theme: 'dark',
  setWorkspace: (workspace) => set({ activeWorkspace: workspace }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' }))
}));
