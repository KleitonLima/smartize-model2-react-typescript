import axios from "axios";

export const api = axios.create({ baseURL: "https://smartize-store-back-m4-production.up.railway.app" || "localhost:3333" });
