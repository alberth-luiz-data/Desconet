import axios from "axios";

const API_BASE_URL = "https://api-qjufruucrq-uc.a.run.app"; 

export async function fetchDesafios() {
  const response = await axios.get(API_BASE_URL+"/desafios");
  return response.data;
}
export async function createDesafio(dados: {
  nome: string;
  descricao: string;
}) {
  const response = await axios.post(API_BASE_URL + "/desafios", {
    ...dados,
    data_criacao: new Date().toISOString(), // ISO 8601 string
  });
  return response.data;
}

