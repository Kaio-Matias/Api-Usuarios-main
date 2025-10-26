// Projeto: cadastro-e-autentica-ao
// Pasta: services
// Nome do Arquivo: userApi.ts

// Execute: npm install axios
import axios from 'axios';

// Cliente HTTP para o microsserviço de Usuários e Pacientes.
// Use o endereço IP da sua máquina onde o backend está rodando.
const userApi = axios.create({
  baseURL: 'http://10.1.2.58:80/api', 
});

// Você pode adicionar interceptors aqui se precisar
// para adicionar o token de autenticação em todas as requisições, por exemplo.

export default userApi;
