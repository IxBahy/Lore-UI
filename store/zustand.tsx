import { create, StateCreator } from "zustand";

interface authSlice {
	isAuthenticated: boolean;
	userToken: string;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
	setUserToken: (token: string) => void;
}
export const useAuthslice: StateCreator<authSlice, [], []> = (set) => ({
	isAuthenticated: true,
	setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
	userToken: "",
	setUserToken: (token: string) => set({ userToken: token }),
});

export const useAuthStore = create<authSlice>((...a) => ({
	...useAuthslice(...a),
}));
