import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/Login.css'
import visible from '../icons/visible.png'
import invisible from '../icons/invisible.png'
import api from '../services/api';
import Header from '../components/Header';
import AlertDismissibleExample from '../components/ErorrAlert';
import { validateLogin } from '../services/validations';
import { useContext } from 'react';
import UserContext from '../context/User/Context';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrMessage] = useState('');
  const redirect = useNavigate();
  const { setToken, setShowErrorAlert } = useContext(UserContext)

  const login = async (email, password) => {
    try {
      const login = await api.post('/login', {email, password})  
      localStorage.setItem('token', JSON.stringify(login.data.token));
      setToken(login.data.token)
      redirect('/dashboard');
    }
    catch(err) {
      setErrMessage(err.response.data.error)
      setShowErrorAlert(true)
    }
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header />
      { <AlertDismissibleExample message={errorMessage}/>}
      <section className='login_section'>
        <div className='login_box'>
          <h3 className='login_header'>Login</h3>
          <form className='login_form'>
            <label>
              Email <br/>
              <input
                className='login_input'
                name='email'
                id='email'
                type="email"
                value={email}
                placeholder="Digite seu email"
                onChange={ ({ target }) => setEmail(target.value) }
              />
            </label>
            <label>
              Senha <br/>
              <input
                className='login_input'
                type={passwordShown ? "text" : "password"}
                name='password'
                id='password'
                value={password}
                onChange={ ({ target }) => setPassword(target.value) }
                placeholder="Digite sua senha"
              />
              <img
                className='toggle_password_button'
                onClick={togglePassword}
                alt="Open/Close Eye for password"
                src={passwordShown ? visible : invisible}
              />
            </label>
            <button
              type="button"
              className='login_button'
              onClick={ () => login(email, password)}
              disabled={ validateLogin(email, password) }
            >
              Entrar
            </button>
          </form>
          <p className='register_quest'>
            Ainda não possui cadastro? <Link to='/register'>Clique aqui!</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
