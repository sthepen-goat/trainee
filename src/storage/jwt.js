// Função para decodificar JWT no Node.js
function decodeJWT(token) {
    const parts = token.split('.');
  
    if (parts.length !== 3) {
      throw new Error('Token JWT inválido');
    }
  
    const payload = parts[1];
    const base64 = base64UrlToBase64(payload);
  
    // Usando Buffer para decodificar em Node.js
    const decoded = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
  
    return decoded;
  }
  
  // Exemplo de uso
  const token = 'seu_token_jwt_aqui'; // Substitua pelo token JWT real
  const decoded = decodeJWT(token);
  console.log(decoded);
  