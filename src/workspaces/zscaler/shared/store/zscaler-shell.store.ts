import { create } from 'zustand';
import type { ZscalerProductArea } from '@/workspaces/zscaler/shared/types/zscaler';

interface ZscalerShellState {
  activeProductArea: ZscalerProductArea;
  setActiveProductArea: (value: ZscalerProductArea) => void;
}

export const useZscalerShellStore = create<ZscalerShellState>((set) => ({
  activeProductArea: 'zia',
  setActiveProductArea: (value) => set({ activeProductArea: value })
}));
