import axios from "axios";
import useAuthStore from "../../storage/auth";
import { useMutation } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_BACKEND_URL; 

const api = axios.create({baseURL});

api.interceptors.request.use(
    (requisiçao) => {
        const { token } = useAuthStore.getState();
        console.log("Token atual:", token); 
        if (!requisiçao.headers.Authorization && token) {
            requisiçao.headers.Authorization = `Bearer ${token}`;
        }
        return requisiçao;
    },
    (erro) => Promise.reject(erro)
);

export default api;

