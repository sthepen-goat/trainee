import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
import {
  GlobalStyles,
  LogoContainer,
  DivWrapper,
  Container,
  ContentWrapper,
  Title,
  PageContainer,
  Paragraph,
  OtherButton,
  ModalWrapper,
  ModalContent,
  Overlay,
  Barra,
  Link,
  Table,
  K, 
  Row, 
  Cell, 
  Select,
  DeleteButton
} from "./red";
import useAuthStore from "../../storage/auth";
import api from "../../services/api/api";



export default function Home() {
  const menuItems = ["HOME", "PERFIL", "USUÁRIOS"];
  const [activeSection, setActiveSection] = useState("HOME"); // Inicializa com "HOME"
  const usuario = useAuthStore((state) => state.usuario);
  const [ usuarios, setUsuarios ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(searchTerm)
  );



  const getUsuarios = async () => {
    try {
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch(erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  }

  const UserUpdate = async () => {
    try {
      const res = await api.put();
      setUsuarios(res.data);
    } catch(erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  }
  
  useEffect( () => {
    getUsuarios();
    UserUpdate();
  }, []);


  const renderSectionContent = () => {
    switch (activeSection) {
      case "HOME":
        return <div>Bem-vindo à Home! Aqui você encontrará as últimas novidades.</div>;
      case "PERFIL":
        return (
          <div>
            <Title>PERFIL</Title>
            <PageContainer>
              <Paragraph>Usuário: {usuario.nome}</Paragraph>
              <Paragraph>Email: {usuario.email}</Paragraph>
              <Paragraph>Cargo: {usuario.cargo}</Paragraph>
              <Paragraph>Status: {usuario.status} </Paragraph>
            </PageContainer>
            <OtherButton onClick={UserUpdate}>EDITAR</OtherButton>
          </div>
        );
        case "USUÁRIOS":
          return (
            <div >
              <Title>
                GERENCIAR USUÁRIOS
              </Title>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <Barra
                  type="text"
                  placeholder="🔍 Pesquisar usuários"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    padding: "10px",
                    width: "60%",
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              {/* Contêiner com barra de rolagem para a tabela */}
              <div>
                <Table>
                  <thead >
                    <Link>
                      <K>Nome</K>
                      <K>Cargo</K>
                      <K>Usuário</K>
                      <K>Deletar usuário</K>
                    </Link>
                  </thead>
                  <tbody>
                    {filteredUsuarios.map((usuario, index) => (
                      <Row key={index}>
                        <Cell >{usuario.nome}</Cell>
                        <Cell>{usuario.cargo}</Cell>
                        <Cell>
                          <Select defaultValue={usuario.tipo}>
                            <option value="Administrador">Administrador</option>
                            <option value="Comum">Comum</option>
                          </Select>
                        </Cell>
                         {/* Botão com ícone de lixo */}
                         <DeleteButton>
                         <FontAwesomeIcon icon={faTrash} />
                         </DeleteButton>
                      </Row>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          );        
      default:
        return null; 
    }
  };
  
  return (
    <>
      <GlobalStyles /> 
      <LogoContainer>
        <img src="/real.png" alt="Logo" />
        <DivWrapper>
          {menuItems.map((item, index) => (
            <Container key={index} onClick={() => setActiveSection(item)}>
              {item}
            </Container>
          ))}
        </DivWrapper>
      </LogoContainer>

      {/* Renderiza o conteúdo da seção ativa */}
      <ContentWrapper>{renderSectionContent()}</ContentWrapper>
    </>
  );
}