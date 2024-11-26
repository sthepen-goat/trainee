// Cadastro.styled.js
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFE712;
  height: 12vh;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  border: 0;
  background-color: black;
  box-sizing: border-box;
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  color: #FFE712;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: xx-large;
  text-align: center;
  margin-top: 4%;
  margin-bottom: 2%;
`;

export const Barra = styled.input`
  color: #000; /* Cor do texto */
  background-color: #fff; /* Fundo branco */
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  border: 1px solid #d9d9d9; /* Borda cinza clara */
  border-radius: 15px; /* Borda levemente arredondada */
  padding: 10px 15px; /* Espaçamento interno */
  font-size: 16px; /* Tamanho da fonte */
  outline: none; /* Remove o outline padrão */
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02); /* Sombra leve */
  transition: all 0.3s; /* Transições suaves */
  margin-top: 2%;

  &:hover {
    border-color: #40a9ff; /* Borda azul no hover */
  }

  &:focus {
    border-color: #40a9ff; /* Cor da borda no foco */
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Sombra azul no foco */
  }

  &::placeholder {
    color: #bfbfbf; /* Cor do texto do placeholder */
    font-size: 14px; /* Placeholder levemente menor */
  }
`;


export const Paragraph = styled.p`
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1vh;
  margin-top: 2vh;
`;

export const Link = styled.a`
  color: #FFD700;
`;

export const OtherButton = styled.button`
  margin-right: 43%;
  margin-left: 43%;
  width: 14%;
  margin-top: 2px;
  background-color: #ffe712; /* Fundo amarelo */
  color: #000; /* Texto preto */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold; /* Texto em negrito */
  font-size: 14px; /* Tamanho de fonte */
  padding: 8px 16px; /* Espaçamento interno */
  border: none; /* Remove borda padrão */
  border-radius: 15px; /* Borda levemente arredondada */
  cursor: pointer; /* Mostra o cursor de clique */
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045); /* Sombra leve */
  transition: all 0.3s ease; /* Transições suaves para hover e foco */
  text-align: center;

  &:hover {
    background-color: #ffd700; /* Fundo mais escuro ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra maior */
  }

  &:active {
    background-color: #ffc700; /* Fundo mais escuro ao clicar */
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1); /* Sombra reduzida */
    transform: scale(0.98); /* Leve redução no tamanho para simular clique */
  }

  &:focus {
    outline: none; /* Remove o outline padrão */
    box-shadow: 0 0 0 3px rgba(255, 231, 18, 0.5); /* Sombra de foco */
  }
`;


export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
`;


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%; /* Garante que o body ocupe toda a altura da tela */
    background-color: black; /* Cor de fundo preta */
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  #root {
    height: 100%; /* Garante que o conteúdo do React ocupe 100% da tela */
  }
`;

export const DivWrapper = styled.div`
  margin: 0; /* Remove margens extras */
  padding: 0; /* Remove paddings extras */
  display: flex;
  flex-direction: column; /* Alinha o input e o erro na vertical */
  gap: 1px; /* Pequeno espaço entre o input e a mensagem de erro */
`;

export const ErrorMessage = styled.p`
  margin: 0; /* Remove margens extras */
  color: red; /* Cor para mensagens de erro */
  font-size: 0.875rem; /* Deixa o texto menor */
  text-align:center
`;

export const drama = styled.h2`
  color: #FFE712;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: xx-large;
  text-align: center;
  margin-top: 25%;
  margin-bottom: 2%;
`;