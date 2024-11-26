import z from "zod";
export const userVallidationSchema = z.object({
    nome: z
    .string({ required_error: "é necessario haver nome"})
    .min(2, {message: "nome obrigatorio"}),

    email: z
    .string({ required_error: "é necessario haver e-mail"})
    .min(2, {message: "email obrigatorio "}),

    cargo: z
    .string({ required_error: "é necessario haver cargo"})
    .min(2, {message: "cargo obrigatorio "}),

    senha: z
    .string({ required_error: "é necessario haver senha"})
    .min(2, {message: "senha obrigatorio "}),

    status: z
    .string({ required_error: "é necessario haver status"})
    .min(2, {message: "status obrigatorio "}),

});