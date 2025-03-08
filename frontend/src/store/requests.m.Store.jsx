
import { create } from "zustand";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/request" : "/api/request";


axios.defaults.withCredentials = true;

export const requestMatching = create((set) => ({
  matchedAgents: [],
  isLoading: false,
  message: null,
  error: null,
  matchedUsers:[],
  isModal:false,

  request: async (data) => {
    set({ isLoading: true, error: null });
    // console.log("This is the  ", data)
    try {
      console.log("Form auth store  ", data)
      const response = await axios.post(`${API_URL}/create-request`, data);
      set({ matched: response.data.matchedAgents, isLoading: false });
      toast.success("Request matched successfully");
    } catch (error) {
      set({ isLoading: false, error: true, isModal:true });
      const errorMessage = error?.request?.response
        ? JSON.parse(error.request.response)?.message
        : "An unexpected error occurred";
      console.error("Error matching request:", errorMessage);
      toast.error(errorMessage);

      set({
        isLoading: false,
        message: error.response?.data?.message || "Failed to match request",
      });
      throw error;
    }
  },
  fetchMatchedAgents: async (userId) => {
    set({ isLoading: true, error: null });
    console.log("From Other ", userId)
    try {
      const response = await axios.get(`${API_URL}/matchings/${userId}`); // Adjust the 
      console.log(response)
      set({ matchedAgents: response.data.agents || [], isLoading: false, });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to fetch matched agents', isLoading: false });
      const errorMessage = error?.request?.response
        ? JSON.parse(error.request.response)?.message
        : "An unexpected error occurred";
      console.error("Failed to fetch matched", errorMessage);
      toast.error(errorMessage);
    }
  },
  fetchMatchedUsers: async (agentId) => {
    set({ isLoading: true, error: null });
    console.log("From Other ", agentId)
    try {
      const response = await axios.get(`${API_URL}/user-matchings/${agentId}`); // Adjust the endpoint as necessary
      console.log(response)
      set({ matchedUsers: response.data.requests || [], isLoading: false, });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Failed to fetch matched agents', isLoading: false });
      const errorMessage = error?.request?.response
        ? JSON.parse(error.request.response)?.message
        : "An unexpected error occurred";
      console.error("Failed to fetch matched", errorMessage);
      toast.error(errorMessage);
    }
  },
}));

