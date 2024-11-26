import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalStyles,
  LogoContainer,
  Title,
  Barra,
  Paragraph,
  Link,
  OtherButton,
} from "./estilos";
import api from "../../services/api/api";
import useAuthStore from "../../storage/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const usuario = useAuthStore((state) => state.usuario);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  console.log({ token, usuario });

  useEffect(() => {
    if (token) {
      navigate("/home"); // Redireciona automaticamente se já estiver logado
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o estado de carregamento

    try {
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token); // Salva o token no estado global
      toast.success("Login realizado com sucesso!");
      navigate("/home"); // Redireciona para a página inicial
    } catch (erro) {
      console.error(erro);
      const errorMessage =
        erro.response?.data?.message || "Erro ao realizar login.";
      toast.error(`Erro: ${errorMessage}`);
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

  return (
    <>
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <LogoContainer>
        <img src="/real.png" alt="Logo" />
      </LogoContainer>
      <div>
        <Title>LOGIN</Title>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Barra
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // Desativa o campo enquanto estiver carregando
          />
        </div>
        <div>
          <Barra
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
            required
            onChange={(e) => setSenha(e.target.value)}
            disabled={loading} // Desativa o campo enquanto estiver carregando
          />
        </div>
        <div>
          <Paragraph>
            Não tem conta? Faça o cadastro{" "}
            <Link href="/cadrasto">aqui</Link> {/* Atualizado para caminho relativo */}
          </Paragraph>
        </div>
        <OtherButton type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </OtherButton>
      </form>
    </>
  );
}
