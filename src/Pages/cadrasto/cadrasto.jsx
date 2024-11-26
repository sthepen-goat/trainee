import React from "react";
import { useForm } from "react-hook-form";
import { GlobalStyles, LogoContainer, Title, Barra, Paragraph, Link, OtherButton, ErrorMessage } from './styled';
import { useCreateUser, useGetUsers } from "../../hooks/user"; // Importe o GlobalStyles do arquivo styled.js
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userVallidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";


export default function Cadrasto() {
  const queryClient = useQueryClient(); // Obtém a instância do QueryClient

  const { 
    handleSubmit, 
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver:zodResolver(userVallidationSchema)});

  const { mutate: postUser, isPending } = useCreateUser({
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
      reset();
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Erro na criação do usuário.";
      toast.error(`Erro: ${errorMessage}`);
    },
  });

  const { data: usuarios, isLoading } = useGetUsers({});
  console.log(usuarios);
  
  function response(data) {
    console.log("Dados enviados:", data);
    postUser(data);
  }

  return (
    <>
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <LogoContainer>
        <img src="/real.png" alt="Logo" />
      </LogoContainer>
      <div>
        <Title>CADASTRO</Title>
      </div>
      <form onSubmit={handleSubmit(response)}>
        <div>
          <Barra {...register("nome")} placeholder="Nome" size="large" />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </div>
        <div>
          <Barra {...register("email")} placeholder="e-mail" size="large" />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <Barra {...register("cargo")} placeholder="Cargo" size="large" />
          {errors.cargo && <ErrorMessage>{errors.cargo.message}</ErrorMessage>}
        </div>
        <div>
          <Barra {...register("senha")} placeholder="Senha" size="large" type="password" />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </div>
        <div>
          <Barra {...register("status")} placeholder="Status inicial" size="large" />
          {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
        </div>
        <div>
          <Paragraph>
            Já tem uma conta? Faça o login <Link href="http://localhost:5173/login">aqui</Link>
          </Paragraph>
        </div>
        <OtherButton type="submit">CADASTRAR</OtherButton>
      </form>
    </>
  );
}
