import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/Login.css'
import visible from '../icons/visible.png'
import invisible from '../icons/invisible.png'
import api from '../services/api';
import AlertDismissibleExample from '../components/ErorrAlert';
import validateFields from '../services/validations';
import Sucess from '../components/SucessRegister';



const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrMessage] = useState('');


  const register = async (email, password) => {
    try {
      await api.post('/register', {name, email, password})
      setShowSuccess(true)
    }
    catch(err) {
      setShowError(true)
      setErrMessage(err.message)
    }
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      { showError && <AlertDismissibleExample message={errorMessage}/>}
      { showSuccess && <Sucess/> }
      <section className='login_section'>
        <div className='login_box'>
          <h3 className='login_header'>Cadastro</h3>
          <form className='login_form'>
            <label>
              Nome completo <br/>
              <input
                className='login_input'
                name='name'
                id='name'
                type="name"
                value={name}
                placeholder="Digite seu nome"
                onChange={ ({ target }) => setName(target.value) }
              />
            </label>
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
                placeholder="Deve conter no mínimo 8 caracteres"
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
              onClick={ () => register(email, password)}
              disabled={ validateFields(name, email, password) }
            >
              Entrar
            </button>
          </form>
          <p className='register_quest'>
            Já possui cadastro? <Link to='/login'>Clique aqui!</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
