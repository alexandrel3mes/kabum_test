import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'
 
function SucessClient() {
  return (
    <>
      <Alert variant='success'>
        Cadastro realizado com sucesso! <Link to='/dashboard'>Clique aqui</Link> para voltar à dashboard.
      </Alert>
    </>
  );
}

export default SucessClient;