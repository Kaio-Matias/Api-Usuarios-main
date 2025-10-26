import admin from "firebase-admin";
import * as dotenv from "dotenv";

// Garante que as variáveis de ambiente sejam carregadas
dotenv.config();

// Inicializa o Firebase Admin SDK somente se ainda não foi inicializado
// Isso evita erros durante o hot-reload do ts-node-dev
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Formata a chave privada lida do arquivo .env, substituindo '\\n' por quebras de linha reais
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    })
  });
}

// Exporta as instâncias do admin para serem usadas em outras partes da aplicação
const authAdmin = admin.auth();

export { admin, authAdmin };

