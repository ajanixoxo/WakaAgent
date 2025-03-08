import { create } from "zustand";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const API_URL ="https://waka-agent.vercel.app/api/auth"

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	agent: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	signup: async (email, password, name, phoneNumber, country) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name, phoneNumber, country });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	signupAgent: async (email, password, name, phoneNumber) => {
		set({ isLoading: true, error: null });
		try {
			console.log("from auth", email, password, name, phoneNumber)
			const response = await axios.post(`${API_URL}/signup-agent`, { email, password, name, phoneNumber, });
			console.log("This is ", response)
			set({ agent: response.data.agent, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			if (response.data.agent) {
				set({ agent: response.data.agent, user: null, isAuthenticated: true, isLoading: false });
			} else if (response.data.user) {
				set({ user: response.data.user, agent: null, isAuthenticated: true, isLoading: false });
			}
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	logout: async () => {

		set({ isLoading: true, error: null });
		const response = await axios.post(`${API_URL}/logout`);
		try {

			if (response.data.user) {
				set({ user: null, isAuthenticated: false, error: null, isLoading: false });
				toast.success("Logged out  successfully");
			} else if (response.data.agent) {
				set({ agent: null, isAuthenticated: false, error: null, isLoading: false });

			}
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });

			const verifiedUser = response.data.user || response.data.agent;
			if (response.data.user) {
				set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			} else if (response.data.agent) {
				set({ agent: response.data.agent, isAuthenticated: true, isLoading: false });
			}

			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			// Check if response contains a user or an agent and update state accordingly
			if (response.data.agent) {
				set({ agent: response.data.agent, user: null, isAuthenticated: true, isCheckingAuth: false });
			} else if (response.data.user) {
				set({ user: response.data.user, agent: null, isAuthenticated: true, isCheckingAuth: false });
			} else {
				// If neither user nor agent is present, set authenticated to false
				set({ user: null, agent: null, isAuthenticated: false, isCheckingAuth: false });
			}
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},
	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},
	updateAgentProfile: async (country, state, nin, imageFile, areaLocations, touringFee, agentId) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/agent-verification`, {
				country,
				state,
				nin,
				image: imageFile,
				area: areaLocations,
				touringFee,
				agentId
			});

			if (response.data.agent) {
				// Update the state with the updated agent info
				set({ agent: response.data.agent, isLoading: false });
				toast.success("Profile updated successfully");
			} else {
				toast.error("Agent profile not found");
				set({ isLoading: false });
			}
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating profile", isLoading: false });
			toast.error("Error updating profile");
			throw error;
		}
	},
}));