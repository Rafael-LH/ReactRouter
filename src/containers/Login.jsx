import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Icons
import Twitter from '@images/twitter-icon.png';
import GoogleIcon from '@images/google-icon.png';

//Components
import Header from '../components/Header';
import { loginRequest } from '../actions';

//Styles
import '@styles/Login.scss';

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    userName: '',
  });
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    // history.push es un metodo que ya biene por defecto en las props de react y sirve como un location.href
    //nos sirve para hacer redireccionamiento y para hacer redireccionamiento en la UI es con un componente
    // propio de react router que se llama Redirect
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='input w-100'
              name='userName'
              id='userName'
              placeholder='Nombre de usuario'
              onChange={handleInput}
              required
            />
            <input
              className='input w-100'
              type='text'
              name='email'
              id='email'
              placeholder='Correo'
              onChange={handleInput}
              required
            />
            <input
              className='input w-100'
              type='password'
              name='password'
              id='password'
              placeholder='Contraseña'
              required
            />
            <input
              type='submit'
              className='button'
              value='Iniciar sesión'
            />
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={GoogleIcon} alt='google icon' />
          Inicia sesión con Google
            </div>
            <div>
              <img src={Twitter} alt='Twitter' />
          Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
        No tienes ninguna cuenta
            {' '}
            <Link to='/registro'>
          Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
// mapStateToProps mapDispatchToProps
export default connect(null, mapDispatchToProps)(Login);
