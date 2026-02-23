// src/services/contacto.js
import { api } from "./api";

function toMsg(v) {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v.map(toMsg).filter(Boolean).join(" | ");
  if (typeof v === "object") {
    // casos comunes: { message }, { error }, { issues:[...] }
    return v.message || v.error || JSON.stringify(v);
  }
  return String(v);
}

function normalizeError(error) {
  const backend = error?.response?.data;

  // Si el backend manda { ok:false, error:"..." } o { message:"..." } o similares
  const backendMsg =
    backend?.error ||
    backend?.message ||
    backend?.msg ||
    backend?.errors ||
    backend?.issues;

  // Si no hay respuesta: timeout, red, CORS, DNS, etc.
  const fallbackMsg =
    error?.code === "ECONNABORTED"
      ? "La solicitud tardó demasiado (timeout). Intenta nuevamente."
      : "Error de conexión con el servidor.";

  return {
    ok: false,
    error: toMsg(backendMsg) || fallbackMsg,
    _debug: import.meta.env.DEV
      ? {
          status: error?.response?.status,
          code: error?.code,
          message: error?.message,
          backend,
          url: (error?.config?.baseURL ?? "") + (error?.config?.url ?? ""),
          method: error?.config?.method,
        }
      : undefined,
  };
}

export const contactoService = {
  async enviarFormulario(data) {
    try {
      const res = await api.post("/contacto", data);
      return res.data; // { ok:true, message:"..." }
    } catch (error) {
      const normalized = normalizeError(error);

      if (import.meta.env.DEV) {
        console.error("Error enviando formulario:", normalized._debug);
      }

      // tiramos un objeto estable para el componente
      throw normalized;
    }
  },
};
