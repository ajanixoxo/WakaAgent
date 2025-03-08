import { create } from "zustand";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/edit" : "/api/edit";


axios.defaults.withCredentials = true;

export const useEditStore = create((set) => ({
    isLoading: false,
    message: null,
    error: null,
    user: null,
    agent: null,

    userEditRequest: async (formData) => {
        set({ isLoading: true, error: null });
        try {
            // console.log("From auth store " ,formData)
            const response = await axios.post(`${API_URL}/user-profile`, {formData});
            set({ user: response.data.user, isLoading: false})
            toast.success("User Details update successfully");
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            console.error("ERROR ", error)
            toast.error("Error updating user details ");
            throw error;
        }
    },
    agentEditRequest: async (formData) => {
        set({ isLoading: true, error: null });
        try {
         console.log("From auth store " ,formData)
            const response = await axios.post(`${API_URL}/agent-profile`, {formData});
            set({ agent: response.data.agent, isLoading: false})
            toast.success("Agent Details update successfully");
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            console.error("ERROR ", error)
            toast.error("Error updating agent details ");
            throw error;
        }
    }

}))