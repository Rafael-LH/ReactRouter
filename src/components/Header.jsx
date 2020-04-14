import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';
import { logOut } from '../actions';

const Header = ({ user, logOut }) => {

  const hasUser = Object.keys(user).length > 0;
  const handleClick = (e) => {
    logOut({});
  };
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
                <Link to='/' onClick={handleClick}> Cerrar Sesión </Link>
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

const mapDispatchToProps = {
  logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
