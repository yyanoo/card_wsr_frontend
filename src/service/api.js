import axios from "axios";

const url_card = "https://raw.githubusercontent.com/yyanoo/test/main";

export function getCard(id) {
  return axios.get(`${url_card}/${id}.json`);
}
