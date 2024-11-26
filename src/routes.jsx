import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/home/home";
import Login from "./Pages/login/login";
import Cadrasto from "./Pages/cadrasto/cadrasto";
import useAuthStore from "./storage/auth";

export default function Routes() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // Função de logout
  const logout = () => {
    clearAuth();
  };

  // Configuração do roteador
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Página padrão, redirecionando para o login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Página de login */}
        <Route path="login" element={<Login />} />

        {/* Página de cadastro */}
        <Route path="cadrasto" element={<Cadrasto />} />

        {/* Página home acessível apenas para usuários autenticados */}
        {usuario ? (
          <Route path="home" element={<Home />} />
        ) : (
          <Route path="home" element={<Navigate to="/login" />} />
        )}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
