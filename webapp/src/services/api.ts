import axios from "axios";

const API_BASE_URL = "https://api-qjufruucrq-uc.a.run.app/desafios"; // ex: http://192.168.0.100:3000/api/desafios

export async function fetchDesafios() {
  const response = await axios.get(API_BASE_URL);
  return response.data;
}
