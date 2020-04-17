import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = ({ user, logoutRequest, isLogin, isRegister }) => {

  const hasUser = Object.keys(user).length > 0;
  const handleLogout = e => logoutRequest({});

  // el primer parametro es la clase primcipal que tendra mi componente y el segundo parametro que es un objeto son las
  // clases que te van a estar llegando por props
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
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
          <p>Perfil</p>
        </div>
        <ul>
          {
            !hasUser ? (
              <>
                <li>
                  <Link to='/registro'>Registrar </Link>
                </li>
                <li>
                  <Link to='/login'>Iniciar Sesión </Link>
                </li>
              </>
            ) : (
              <>
                <li>{user.userName}</li>
                <li>
                  <Link to='/' onClick={handleLogout}> Cerrar Sesión </Link>
                </li>
              </>
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
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
