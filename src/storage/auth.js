import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";



 const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);
        set({token, usuario});
      },
      setUsuarios: (usuario) => set({ usuario }), // Apenas atualiza o usuário
      clearAuth: () => set({ token: null, usuario: null}),
    }),
    {
      name: "auth", // Persistência do estado
    }
  )
);

export default useAuthStore;

