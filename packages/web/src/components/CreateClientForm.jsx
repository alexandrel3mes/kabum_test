function CreateClientForm() {
  return (
    <form className='login_form'>
            <label>
              Email <br/>
              <input
                className='login_input'
                name='email'
                id='email'
                type="email"
                placeholder="Digite seu email"
              />
            </label>
            <label>
              Senha <br/>
              <input
                className='login_input'
                name='password'
                id='password'
                placeholder="Digite sua senha"
              />
            </label>
            <button
              type="button"
              className='login_button'
            >
              Entrar
            </button>
          </form>
  );
}

export default CreateClientForm;