import React, { useState } from 'react';
import '../style/Login.css'
import api from '../services/api';
import AlertDismissibleExample from '../components/ErorrAlert';
import DashboardHeader from '../components/DashboardHeader';
import '../style/RegisterClient.css'
import { validateCreate } from '../services/validations';
import SucessClient from '../components/SucessClientRegister';


const RegisterClient = () => {
  const [cpf, setCpf] = useState('');
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
  const [zipcode, setZipcode] = useState('');
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

  function formatDate (input) {
    const datePart = input.split("-")
    const year = datePart[0].substring(0)
    const month = datePart[1]
    const day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }

  const factoryAddress = () => {
    const addObj = {
      address,
      number,
      zipcode,
      district,
      city,
      state
    }

    if (complement) addObj.complement = complement
    if (reference) addObj.reference = reference
    setAddresses(addresses => addresses.concat(addObj))
    setAddress('')
    setNumber('')
    setZipcode('')
    setComplement('')
    setReference('')
    setDistrict('')
    setCity('')
    setState('AC')
  }

  const factory = () => {
    console.log(addresses)
    const addObj = {
      address,
      number,
      zipcode,
      district,
      city,
      state
    }

    if (complement) addObj.complement = complement
    if (reference) addObj.reference = reference

    setAddresses(addresses.push(addObj))
    const parsedDate = formatDate(birthday)

    return {
      name,
      cpf,
      rg,
      phone,
      birthday: parsedDate,
      addresses
    }
  }

  const register = async () => {
    const data = factory()
    try {
      const token = localStorage.getItem('token')
      await api.post(`/client`, data, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
    })
      setShowSuccess(true)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    catch(err) {
      setShowError(true)
      setErrMessage(err.message)
    }
  }

  const handleChange = value => {
    const result = value.replace(/[^0-9]/gi, '');

    return result
  };

  const bothValidate = () => {
    return validateCreate(name, cpf, rg, phone)
  }

  return (
    <>
      <DashboardHeader />
      { showError && <AlertDismissibleExample message={errorMessage}/>}
      { showSuccess && <SucessClient/> }
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
                placeholder="Digite o RG (apenas números)"
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
          <form className='login_form'>
            <label>
              CEP *<br/>
              <input
                className='login_input'
                required
                minLength={7}
                name='zipcode'
                id='zipcode'
                type="text"
                value={zipcode}
                placeholder="Digite o CEP (apenas números)"
                onChange={ ({ target }) => setZipcode(handleChange(target.value)) }
              />
            </label>
            <label>
              Endereço * <br/>
              <input
                className='login_input'
                name='address'
                id='address'
                required
                type="text"
                value={address}
                placeholder="Digite seu endereço"
                onChange={ ({ target }) => setAddress(target.value) }
              />
            </label>
            <label>
              Número *<br/>
              <input
                className='login_input'
                name='number'
                id='number'
                type="text"
                required
                value={number}
                placeholder="Número"
                onChange={ ({ target }) => setNumber(target.value) }
              />
            </label>
            <label>
              Complemento <br/>
              <input
                className='login_input'
                name='complement'
                id='complement'
                type="text"
                value={complement}
                placeholder="Complemento do endereço"
                onChange={ ({ target }) => setComplement(target.value) }
              />
            </label>
            <label>
              Ponto de referência <br/>
              <input
                className='login_input'
                name='reference'
                id='reference'
                type="text"
                value={reference}
                placeholder="Algum ponto de referência"
                onChange={ ({ target }) => setReference(target.value) }
              />
            </label>
            <label>
              Bairro * <br/>
              <input
                className='login_input'
                name='district'
                required
                id='district'
                type="text"
                value={district}
                placeholder="Algum ponto de referência"
                onChange={ ({ target }) => setDistrict(target.value) }
              />
            </label>
            <label>
              Cidade *<br/>
              <input
                className='login_input'
                name='city'
                id='city'
                required
                type="text"
                value={city}
                placeholder="Algum ponto de referência"
                onChange={ ({ target }) => setCity(target.value) }
              />
            </label>
            <label>
              Estado * <br/>
              <select
                className='login_input'
                name='state'
                id='state'
                required
                value={state}
                onChange={ ({ target }) => setState(target.value) }
              >
                { ufs.map((uf) => (
                  <option value={uf} key={uf}>{uf}</option>
                ))}
              </select>
            </label>
          </form>
          <button
            type="button"
            className='login_button'
            onClick={ () => factoryAddress() }
          >
            Adicionar outro endereço
          </button>
          <button
              type="button"
              className='login_button'
              disabled={bothValidate()}
              onClick={() => register()}
            >
              Finalizar cadastro
            </button>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
