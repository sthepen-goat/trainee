// Cadastro.styled.js
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFE712; /* Fundo amarelo */
  height: 12vh;
`;

export const PageContainer = styled.div`
  background-color: grey;
  margin-left: 25%;
  margin-right:25%;
  width:50%;
  height: 30vh;
  margin-top: 7%;
  border-radius:10px;
`;

export const Title = styled.h1`
  color: #FFE712;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: xx-large;
  text-align: center;
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
  color: #FFE712;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1vh;
  margin-top: 2vh;
  font-size: 30px;
  padding-left:10px;
`;


// Estilização do Cabeçalho da Tabela (thead)
export const Link = styled.tr`
  background-color: black; /* Fundo amarelo no cabeçalho */
  color: white; /* Texto preto */
  font-family:Arial, Helvetica, sans-serif;
  font-size: 25px;
  justify-content: space-between; /* Espaço igual entre os elementos */
`;


// Estilização de Células no Cabeçalho (th ou <K>)
export const K = styled.th`
  font-weight: bold;
  padding: 10px 20px;
  flex: 1; /* Cada coluna ocupa o mesmo espaço */
`;

// Estilização das Linhas (tbody > tr)
export const Row = styled.tr`
  background-color: black;
  border-bottom: 2px solid white;
  height: 75px;
`;

// Estilização de Células (td)
export const Cell = styled.td`
  font-family:Arial, Helvetica, sans-serif;
  color:white;
  border-bottom: none;
  text-align: center; /* Centraliza horizontalmente */
  vertical-align: middle; /* Centraliza verticalmente */
  font-size: 22px;
`;

// Estilização do Conteúdo Selecionável (select, se necessário)
export const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
`;


export const OtherButton = styled.button`
  margin-right: 43%;
  margin-left: 43%;
  width: 14%;
  margin-top: 3%;
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
  display: inline-block;
  text-align: center;
  margin: 0 20px;
  background-color: #FFE712;
  font-weight: bold;
  cursor: pointer;
  flex: 0 0 auto; /* Evita que os itens se ajustem automaticamente */
`;

export const divperfil = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 20px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  flex: 0 0 auto; /* Evita que os itens se ajustem automaticamente */
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
  display: flex;
  overflow-x: auto; /* Ativa a rolagem horizontal */
  scroll-behavior: smooth; /* Faz a rolagem ser suave */
  background-color: #FFE712; /* Fundo amarelo */
  padding: 10px 0;
  white-space: nowrap; /* Garante que os itens fiquem lado a lado */
  justify-content: space-between;
  width:100
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
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Ativa a rolagem horizontal */
  scroll-behavior: smooth; /* Faz a rolagem ser suave */
  background-color: #ffd700; /* Fundo amarelo */
  padding: 10px 0;
  white-space: nowrap; /* Garante que os itens fiquem lado a lado */
`;


const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;


export const ContentWrapper = styled.div`
  margin-top: 0;
  border: 1px solid #ccc;
  height:88vh;
  background-color: black;
`;


export const perfil = styled.h1`
  margin-top: 0;
  border: 1px solid #ccc;
  height:88vh;
  color: #FFE712;
`;

export const Overlay = styled.div`
  
`;

export const ModalWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Table = styled.table`
  width:60%;
  background-color:black;
  margin-top: 4%;
  margin-left:20%;
  margin-right:20%;
  border-spacing:0;
  border-collapse: collapse; /* Garante que as bordas sejam unidas */
`;

export const DeleteButton = styled.button`
  background: transparent; /* Fundo transparente */
  color: grey; /* Cor do ícone ou do texto */
  font-size: 30px; /* Tamanho do ícone */
  display: flex; /* Garante que o ícone seja flexível */
  margin-left:45%;
  margin-top:5%;
  &:hover {
    color: darkred; /* Cor do ícone ao passar o mouse */
  }
`;