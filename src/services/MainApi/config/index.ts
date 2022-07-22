import axios from "axios";

// Bases da requisição: tudo o que vai ser sempre igual e fixo, tudo o que é padrão
const baseApi = axios.create({
  baseURL: "http:///localhost:4000",
  headers: {
    "Access-Control-Allow-Origin": "https://localhost:4000",
    "Access-Control-Allow-Methods": "POST, GET",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": 86400,
    "Content-Type": "application/json",
  },
});

export default baseApi;