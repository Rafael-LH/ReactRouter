export const setFavorite = (payload) => {
  return (
    {
      type: 'SET_FAVORITE',
      payload,
    }
  );
};

export const deleteFavorite = (payload) => {
  return (
    {
      type: 'DELETE_FAVORITE',
      payload,
    }
  );
};

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => {
  return (
    {
      type: 'REGISTER_REQUEST',
      payload,
    }
  );
};

export const playerId = payload => ({
  type: 'PLAYER_ID',
  payload,
});

export const searchRequest = payload => ({
  type: 'SEARCH_REQUEST',
  payload,
});

// otra forma de exportar
// export { setFavorite, deleteFavorite };
