import axios from "axios";

const API_BASE = "https://backend-33mc.onrender.com/cards";

export function searchCards({ title }) {
  const params = new URLSearchParams();
  if (title) params.append("title", title);
  return axios.get(`${API_BASE}?${params.toString()}`);
}
