import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample({message}) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Ocorreu um erro</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
}

export default AlertDismissibleExample