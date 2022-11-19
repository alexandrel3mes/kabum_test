import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './Context';

function UserProvider({ children }) {
  const [token, setToken] = useState('');
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showExcludeModal, setShowExcludeModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [clientToExclude, setClientToExclude] = useState('')

  const contextValue = useMemo(() => ({
    token,
    setToken,
    clients,
    setClients,
    showModal,
    setShowModal,
    client,
    setClient,
    showExcludeModal,
    setShowExcludeModal,
    showEditModal,
    setShowEditModal,
    showErrorAlert,
    setShowErrorAlert,
    clientToExclude,
    setClientToExclude
  }), [token, client, clients, showModal, showExcludeModal, showEditModal, showErrorAlert, clientToExclude]);

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
