import { create, StateCreator } from "zustand";

interface authSlice {
	isAuthenticated: boolean;
	userToken: string;
	refreshToken: string;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
	setUserToken: (token: string) => void;
	setRefreshToken: (token: string) => void;
}
export const useAuthslice: StateCreator<authSlice, [], []> = (set) => ({
	isAuthenticated: false,
	setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
	userToken: "",
	refreshToken: "",
	setUserToken: (token: string) => set({ userToken: token }),
	setRefreshToken: (token: string) => set({ refreshToken: token }),
});

export const useAuthStore = create<authSlice>((...a) => ({
	...useAuthslice(...a),
}));
