import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '@styles/Register.scss';

const Register = ({ registerRequest, history }) => {
  const [form, setForm] = useState({
    userName: '',
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
    registerRequest(form);
    // history.push es un metodo que ya biene por defecto en las props de react y sirve como un location.href
    //nos sirve para hacer redireccionamiento y para hacer redireccionamiento en la UI es con un componente
    // propio de react router que se llama Redirect
    history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              className='input w-100'
              type='text'
              placeholder='Nombre de usuario'
              id='userName'
              name='userName'
              onChange={handleInput}
              required
            />
            <input
              className='input w-100'
              type='text'
              placeholder='Correo'
              id='email'
              name='email'
              onChange={handleInput}
              required
            />
            <input
              className='input w-100'
              type='password'
              placeholder='Contraseña'
              required
            />
            <button type='submit' className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
       Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
