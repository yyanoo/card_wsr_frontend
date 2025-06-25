import axios from "axios";

const API_BASE = "https://backend-33mc.onrender.com/cards";

export function searchCards({ id, title, color, lvl }) {
  const params = new URLSearchParams();
  if (id) params.append("id", id);
  if (title) params.append("title", title);
  if (color) params.append("color", color);
  if (lvl) params.append("lvl", lvl);

  return axios.get(`${API_BASE}?${params.toString()}`);
}
