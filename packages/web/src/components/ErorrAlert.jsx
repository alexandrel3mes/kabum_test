import React, { useEffect } from 'react';
import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import UserContext from '../context/User/Context';

function AlertDismissibleExample({message}) {
  const {showErrorAlert, setShowErrorAlert} = useContext(UserContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorAlert(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [showErrorAlert]);

    return (
      <Alert show={showErrorAlert} variant="danger">
        <Alert.Heading>Ocorreu um erro</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
}

export default AlertDismissibleExample