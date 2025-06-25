import axios from "axios";

const url_api_card = "https://backend-33mc.onrender.com/cards";

export function getCardTitle(id) {
  return axios.get(`${url_api_card}/${id}`);
}

export function searchCardId(){
  return axios.get(`${url_api_card}`)
}