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

export const logOut = payload => ({
  type: 'LOG_OUT',
  payload,
});
// otra forma de exportar
// export { setFavorite, deleteFavorite };
