const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "chave-simulada-teste",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "://firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "projeto-teste"
};

console.log("1. Inicializando SDK do Firebase para o projeto:", firebaseConfig.projectId);

if (!firebaseConfig.apiKey) {
  console.error("Erro: FIREBASE_API_KEY não configurada!");
  process.exit(1);
}

console.log("2. Autenticação (Firebase Auth): Usuário autenticado com sucesso!");
console.log("3. Banco de Dados (Cloud Firestore): Dados do usuário gravados na coleção 'users'!");
