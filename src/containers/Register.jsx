import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input w-100' type='text' placeholder='Nombre' />
        <input className='input w-100' type='text' placeholder='Correo' />
        <input className='input w-100' type='password' placeholder='Contraseña' />
        <input type='button' className='button' value='Registrarme' />
      </form>
      <Link to='/login'>
       Iniciar sesión
      </Link>
    </section>
  </section>
);
export default Register;
