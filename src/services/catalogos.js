// src/services/catalogos.js
import { api } from "./api";

const toNombre = (row) => ({
  id: row.id,
  nombre: row.nombre ?? row.descripcion ?? "",
});

const mapSafe = (data) => (Array.isArray(data) ? data.map(toNombre) : []);

export const catalogosService = {
  async getRegiones() {
    const { data } = await api.get("/catalogos/regiones");
    return mapSafe(data);
  },

  async getProvincias(regionId) {
    if (!regionId) return [];
    const { data } = await api.get(`/catalogos/provincias/${regionId}`);
    return mapSafe(data);
  },

  async getComunas(provinciaId) {
    if (!provinciaId) return [];
    const { data } = await api.get(`/catalogos/comunas/${provinciaId}`);
    return mapSafe(data);
  },

  async getTipoCliente() {
    const { data } = await api.get("/catalogos/tipo-cliente");
    return mapSafe(data);
  },

  async getTipoVehiculo() {
    const { data } = await api.get("/catalogos/tipo-vehiculo");
    return mapSafe(data);
  },

  async getObjetivoRastreo() {
    const { data } = await api.get("/catalogos/objetivo-rastreo");
    return mapSafe(data);
  },

  async getGpsUso() {
    const { data } = await api.get("/catalogos/usa-gps");
    return mapSafe(data);
  },

  async getPlazo() {
    const { data } = await api.get("/catalogos/plazo-implementacion");
    return mapSafe(data);
  },
};
