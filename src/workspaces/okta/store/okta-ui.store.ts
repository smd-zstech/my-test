import { create } from 'zustand';

interface OktaUiState {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const useOktaUiStore = create<OktaUiState>((set) => ({
  activePage: 'home',
  setActivePage: (page) => set({ activePage: page })
}));
