import axios from "axios";

const normalize = (url) => (url ? url.trim().replace(/\/+$/, "") : "");

// VITE_API_URL debe venir completo (incluyendo /api)
const envBase = normalize(import.meta.env.VITE_API_URL);

// Fallback solo para dev local
const baseURL = envBase || "http://localhost:4001/api";

// Aviso en dev si alguien configuró mal (pero NO lo autocorrige)
if (import.meta.env.DEV) {
  console.log("VITE_API_URL =>", import.meta.env.VITE_API_URL, "| baseURL usado =>", baseURL);

  if (envBase && !envBase.endsWith("/api")) {
    console.warn(
      "[api] VITE_API_URL no termina en /api. Recomendado: setearlo como .../api en el .env"
    );
  }
}

export const api = axios.create({
  baseURL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    const url = (error?.config?.baseURL ?? "") + (error?.config?.url ?? "");
    const msg =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.message;

    if (import.meta.env.DEV) {
      console.error("API ERROR:", { status, url, msg, data: error?.response?.data });
    }

    return Promise.reject(error);
  }
);
