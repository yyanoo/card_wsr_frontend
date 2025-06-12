import axios from "axios";

const url_card = "https://backend-33mc.onrender.com/cards";

export function getCard(id) {
  return axios.get(`${url_card}/${id}`);
}
