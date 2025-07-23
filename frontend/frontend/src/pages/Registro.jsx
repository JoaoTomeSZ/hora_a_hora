// Registro.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api'

function Registro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/registro', { usuario, email, senha });
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Erro ao registrar');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <div>
          <label>Nome de usuário:</label><br />
          <input
            type="text"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>Já tem conta? <Link to="/">Faça login</Link></p>
    </div>
  );
}

export default Registro;