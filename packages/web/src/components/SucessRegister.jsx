import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'
 
function Sucess() {
  return (
    <>
      <Alert variant='success'>
        Cadastro realizado com sucesso! <Link to='/login'>Clique aqui</Link> para voltar à tela de login.
      </Alert>
    </>
  );
}

export default Sucess;