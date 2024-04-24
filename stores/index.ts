import { create } from "zustand";

type thumbState = {
  thumbs: number;
  increaseThumb: () => void;
  clearThumb: () => void;
};

export const useStore = create<thumbState>((set) => ({
  thumbs: 0,
  increaseThumb: () => set((state) => ({ thumbs: state.thumbs + 1 })),
  clearThumb: () => set({ thumbs: 0 }),
}));
