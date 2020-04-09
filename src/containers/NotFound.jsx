import React, from 'react';
import { Link } from 'react-router-dom';
import '@styles/NotFound.scss';

const NotFound = () => (
  <div className='container-not-found'>
    <h1>
      Pagina no encontrada
      <span>⚠︎</span>
    </h1>
    <Link to='/'> Ir al home </Link>
  </div>
);
export default NotFound;
