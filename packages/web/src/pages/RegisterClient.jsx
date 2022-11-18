import React, { useState } from 'react';
import '../style/Login.css'
import api from '../services/api';
import AlertDismissibleExample from '../components/ErorrAlert';
import Sucess from '../components/SucessRegister';
import DashboardHeader from '../components/DashboardHeader';
import '../style/RegisterClient.css'
import { validateCreate } from '../services/validations';


const RegisterClient = () => {
  const [cpf, setCpf] = useState('');
  const [addressToReg, setAddressToReg] = useState(1);
  const [addresses, setAddresses] = useState([])
  const [rg, setRg] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrMessage] = useState('');
  
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [reference, setReference] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('AC');

  const ufs = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]


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

  const createAddressForm = () => {
    setAddressToReg(addressToReg + 1)
  }

  const handleChange = value => {
    const result = value.replace(/[^0-9]/gi, '');

    return result
  };

  const arr = Array.from(Array(addressToReg).keys())

  const bothValidate = () => {
    return validateCreate(name, cpf, rg, phone)
  }

  return (
    <>
      <DashboardHeader />
      { showError && <AlertDismissibleExample message={errorMessage}/>}
      { showSuccess && <Sucess/> }
      <section className='register_section'>
        <div className='login_box'>
          <h3 className='login_header'>Cadastrar cliente</h3>
          <form className='login_form'>
            <label>
              Nome completo <br/>
              <input
                className='login_input'
                name='name'
                id='name'
                type="text"
                value={name}
                placeholder="Digite o nome do cliente"
                onChange={ ({ target }) => setName(target.value) }
              />
            </label>
            <label>
              CPF <br/>
              <input
                className='login_input'
                name='cpf'
                id='cpf'
                type="text"
                value={cpf}
                placeholder="Digite o CPF (apenas números)"
                onChange={ ({ target }) => setCpf(handleChange(target.value)) }
              />
            </label>
            <label>
              RG <br/>
              <input
                className='login_input'
                name='rg'
                id='rg'
                type="text"
                value={rg}
                placeholder="Digite o RRG (apenas números)"
                onChange={ ({ target }) => setRg(handleChange(target.value)) }
              />
            </label>
            <label>
              Telefone <br/>
              <input
                className='login_input'
                name='phone'
                id='phone'
                type="text"
                value={phone}
                placeholder="Digite o telefone (apenas números)"
                onChange={ ({ target }) => setPhone(handleChange(target.value)) }
              />
            </label>
            <label>
              Data de nascimento <br/>
              <input
                className='login_input'
                name='birthday'
                id='birthday'
                type="date"
                value={birthday}
                placeholder="Digite sua data de nascimento"
                onChange={ ({ target }) => setBirthday(target.value) }
              />
            </label>
          </form>
          <h4>Endereços</h4>
          <p>* campos obrigatórios</p>
          {
            addressToReg && arr.map((index) => (
          <form key={index} className='login_form'>
            <label>
              Endereço * <br/>
              <input
                className='login_input'
                name='address'
                id='address'
                type="text"
                value={address}
                placeholder="Digite seu endereço"
                onChange={ ({ target }) => setAddress(target.value) }
              />
            </label>
            <label>
              Número <br/>
              <input
                className='login_input'
                name='number'
                id='number'
                type="text"
                value={number}
                placeholder="Número"
                onChange={ ({ target }) => setCpf(target.value) }
              />
            </label>
            <label>
              RG <br/>
              <input
                className='login_input'
                name='rg'
                id='rg'
                type="text"
                value={rg}
                placeholder="Digite seu RG"
                onChange={ ({ target }) => setRg(target.value) }
              />
            </label>
            <label>
              Telefone <br/>
              <input
                className='login_input'
                name='phone'
                id='phone'
                type="text"
                value={phone}
                placeholder="Digite seu telefone"
                onChange={ ({ target }) => setPhone(target.value) }
              />
            </label>
            <label>
              Estado * <br/>
              <select
                className='login_input'
                name='state'
                id='state'
                value={state}
                onChange={ ({ target }) => setState(target.value) }
              >
                { ufs.map((uf) => (
                  <option value={uf} key={uf}>{uf}</option>
                ))}
              </select>
            </label>
          </form>
            ))
          }
          <button
            type="button"
            className='login_button'
            onClick={ () => createAddressForm() }
          >
            Adicionar outro endereço
          </button>
          <button
              type="button"
              className='login_button'
              disabled={bothValidate()}
            >
              Finalizar cadastro
            </button>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
