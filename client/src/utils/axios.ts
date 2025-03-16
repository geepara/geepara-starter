import axios, { AxiosRequestHeaders } from "axios";

export const client = axios.create({
  baseURL:
    window.ENV?.VITE_APP_API_BASE_URL || import.meta.env.VITE_APP_API_BASE_URL,
});

client.interceptors.request.use(
  async (config) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const token = await (window as any).Clerk.session.getToken();
      config.headers = {
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;

      return config;
    } catch {
      throw new Error("Failed to get token");
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);
