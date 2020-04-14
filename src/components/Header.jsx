import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = ({ user }) => {

  const hasUser = Object.keys(user).length > 0;

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ? (
              <img src={gravatar(user.email)} alt={user.email} />
            ) : (
              <img src={userIcon} alt='Avatar' />
            )
          }
          <p>{user.userName ? user.userName : 'Perfil'}</p>
        </div>
        <ul>
          {
            !hasUser ? (
              <li>
                <Link to='/registro'>Registrar </Link>
                <Link to='/login'>Iniciar Sesión </Link>
              </li>
            ) : (
              <li>
                <Link to='/'> Cerrar Sesión </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Header);
