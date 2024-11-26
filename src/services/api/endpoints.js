import api from "./api";



export async function GetUsers() {
  const { data } = await api.get("/usuarios"); 
  return data;
}

export async function CreateUser(body) {
  const { data } = await api.post("/usuarios", body); 
  return data;
}

export async function UpdateUser(id, body) {
  const { data } = await api.put(`/usuarios/${id}`, body); 
  return data;
}

export async function DeleteUser(id) {
  const { data } = await api.delete(`/usuarios/${id}`); 
}

export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data; 
  } catch (error) {
    const message = error.response?.data?.message || "Erro ao fazer login.";
    throw new Error(message);
  }
};

