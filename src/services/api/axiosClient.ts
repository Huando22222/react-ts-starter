import axios from "axios";
import { env } from "@/config/env";

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  // TODO: Attach access token
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Handle API errors
    return Promise.reject(error);
  },
);
