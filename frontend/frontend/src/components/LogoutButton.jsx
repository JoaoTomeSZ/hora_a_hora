import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  return (
    <div>
      <h1>Bem-vindo à tela principal!</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default LogoutButton