import baseApi from "./config";

interface PsicologoPayload {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}
// REQUISIÇÃO CADASTRO
// A partir da minha baseApi eu faço um post no endpoint /psicologos, onde payload é um obj com todas as infos que quero cadastrar
// não precisa colocar a URL inteira, pois ela já está configurada em baseURL, então pode passar direto o endpoint
export function cadastroPsicologo(payload: PsicologoPayload) {
  return baseApi.post('/psicologos', payload); // endpoint e objeto (que já é o dado que vou passar)
}

// REQUISIÇÃO LISTA
export function listarPsicologo() {
  return baseApi.get("/psicologos");
}