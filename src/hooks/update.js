import React, { useState } from 'react';
import { useUpdateUser } from './user';

function UpdateUserButton() {
    const [userDetails, setUserDetails] = useState({
      email: '',
      nome: '',
      senha: '',
      status: '',
      cargo: '',
    });
  
    const updateUser = useUpdateUser({
      onSuccess: () => alert('Usuário atualizado com sucesso!'),
      onError: (error) => alert(`Erro ao atualizar o usuário: ${error.message}`),
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    };
  
    const handleUpdate = () => {
      updateUser.mutate(userDetails);
    };
  
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={userDetails.nome}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={userDetails.senha}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={userDetails.status}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={userDetails.cargo}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate} disabled={updateUser.isLoading}>
          {updateUser.isLoading ? 'Atualizando...' : 'Atualizar Usuário'}
        </button>
      </div>
    );
  }
  
  export default UpdateUserButton;