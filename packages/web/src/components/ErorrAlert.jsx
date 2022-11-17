import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample() {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Credenciais incorretas</Alert.Heading>
        <p>
          Email ou senha inválidos
        </p>
      </Alert>
    );
}

export default AlertDismissibleExample