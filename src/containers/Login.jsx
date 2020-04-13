import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '@styles/Login.scss';
import Twitter from '@images/twitter-icon.png';
import GoogleIcon from '@images/google-icon.png';
import { loginRequest } from '../actions';

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    user_name: '',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    // history.push es un metodo que ya biene por defecto en las props de react y sirve como un location.href
    //nos sirve para hacer redireccionamiento
    props.history.push('/');
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='input w-100'
            name='user_name'
            id='user_name'
            placeholder='User Name'
            onChange={handleChange}
          />
          <input
            className='input w-100'
            type='text'
            name='email'
            id='email'
            placeholder='Correo'
            onChange={handleChange}
          />
          <input
            className='input w-100'
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
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
  );
};
const mapDispatchToProps = {
  loginRequest,
};
// mapStateToProps mapDispatchToProps
export default connect(null, mapDispatchToProps)(Login);
