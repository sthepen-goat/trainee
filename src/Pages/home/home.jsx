import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import {GlobalStyles,LogoContainer,DivWrapper,Container,ContentWrapper,Title,PageContainer,Paragraph,OtherButton,Barra,Link,Table,K, Row, Cell, Select,DeleteButton} from "./red";
import useAuthStore from "../../storage/auth";
import api from "../../services/api/api";
import { useUpdateUser } from "../../hooks/user"

export default function Home() {
  const menuItems = ["HOME", "PERFIL", "USUÁRIOS"];
  const [activeSection, setActiveSection] = useState("HOME");
  const usuarioLogado = useAuthStore((state) => state.usuario);
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [usuariosData, setusuariosData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
    status: "",
  });


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  

  const handleUpdateusuarios = (useUpdateUser) => {
    setUsuarios((prevUsuarios) =>
      prevUsuarios.map((usuarios) =>
        usuarios.id === useUpdateUser.id ? { ...usuarios, ...useUpdateUser } : usuarios
      )
    );
    setIsEditing(false);
  };

  const { mutate, isLoading, isError, error } = useUpdateUser({
    onSuccess: (useUpdateUser) => {
      alert("Usuário atualizado com sucesso!");
      handleUpdateusuarios(useUpdateUser);
    },
    onError: (err) => alert(`Erro: ${err.message}`),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setusuariosData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(usuariosData)
    console.log("oi")
    console.log(usuariosData);
  };

  const handleEdit = (usuarios) => {
    setusuariosData(usuarios);
    setIsEditing(true);
  };

  const getUsuarios = async () => {
    try {
      const res = await api.get("/usuarios");
      console.log("Dados recebidos:", res.data); 
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const renderSectionContent = () => {
    switch (activeSection) {
      case "HOME":
        return <div>Bem-vindo à Home! Aqui você encontrará as últimas nov_ades.</div>;
      case "PERFIL":
        return (
          <div>
            <Title>PERFIL</Title>
            <PageContainer>
              {!isEditing ? (
                <div>
                  <Paragraph>Usuário: {usuarioLogado.nome}</Paragraph>
                  <Paragraph>Email: {usuarioLogado.email}</Paragraph>
                  <Paragraph>Cargo: {usuarioLogado.cargo}</Paragraph>
                  <Paragraph>Status: {usuarioLogado.status}</Paragraph>
                  <OtherButton onClick={() => handleEdit(usuarioLogado)}>
                    EDITAR
                  </OtherButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nome"
                    placeholder="nome"
                    value={usuariosData.nome}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={usuariosData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="senha"
                    placeholder="Nova Senha"
                    value={usuariosData.senha}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cargo"
                    placeholder="Cargo"
                    value={usuariosData.cargo}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="status"
                    placeholder="status"
                    value={usuariosData.status}
                    onChange={handleChange}
                  />
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Salvando..." : "Salvar Alterações"}
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </button>
                  {isError && <p style={{ color: "red" }}>{error.message}</p>}
                </form>
              )}
            </PageContainer>
          </div>
        );
        case "USUÁRIOS":
          return (
            <div>
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
                    w_th: "60%",
                    borderRadius: "20px",
                    border: "1px sol_ #ccc",
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
      <ContentWrapper>{renderSectionContent()}</ContentWrapper>
    </>
  );
}