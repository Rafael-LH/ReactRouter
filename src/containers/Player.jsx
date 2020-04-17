import React from 'react';
import { connect } from 'react-redux';
import { playerId } from '../actions';
import '@styles/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {

  // esto nos lo manda Router en el momento que nosotros creamos nuestras rutas
  const { id } = props.match.params;
  // console.log(id);

  const { playing, playerId } = props;
  playerId(id);

  return (
    (!playing) ? (
      <NotFound />
    ) : (
      <div className='player'>
        <video controls>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='player-back'>
          {/* la funcion goBack() esta por defecto / nativo en las props de react */}
          <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const mapDispatchToProps = {
  playerId,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
