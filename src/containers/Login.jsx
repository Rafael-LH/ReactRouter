import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Login.scss';
import Twitter from '@images/twitter-icon.png';
import GoogleIcon from '@images/google-icon.png';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
  });
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input w-100'
            type='text'
            name='email'
            id='email'
            placeholder='Correo'
            onChange={handleInput}
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
export default Login;
