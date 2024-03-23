import { create, StateCreator } from "zustand";

interface authSlice {
	isAuthenticated: boolean;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
}
export const useAuthslice: StateCreator<authSlice, [], []> = (set) => ({
	isAuthenticated: true,
	setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
});

export const useAuthStore = create<authSlice>((...a) => ({
	...useAuthslice(...a),
}));
