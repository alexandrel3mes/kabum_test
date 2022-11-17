import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './Context';

function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  const contextValue = useMemo(() => ({
    user,
    setUser,
  }), [user]);

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
