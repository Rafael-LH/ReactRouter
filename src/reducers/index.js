const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_FAVORITE':
      const issetList = state.myList.findIndex(item => item.id === action.payload.id);

      if (issetList === -1) {
        return {
          ...state, // me traigo mi estado que es todo mi JSON initialState
          myList: [ // que elemento voy actualizar que en este caso es mi lista
            ...state.myList, //con esto me traigo play list que se agregamo más es que ya estaba agregado
            action.payload, //y con el action.payload me traigo toda la data que mando en mi componente CarouselItem del nuevo video que agregue
          ],
        };
      }
      return {
        ...state,
      };

      break;

    case 'DELETE_FAVORITE':
      return {
        ...state, // JSON initialState
        myList: state.myList.filter(item => item.id !== action.payload), //el payload recibe un id
      };
      break;

    case 'LOGIN_REQUEST':
      return {
        ...state, // JSON initialState
        user: action.payload,
      };
      break;

    case 'LOGOUT_REQUEST':
      return {
        ...state, // JSON initialState
        user: action.payload,
      };
      break;

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
      break;

    case 'PLAYER_ID':
      const [data] = state.trends.filter(item => item.id === parseInt(action.payload));
      return {
        ...state,
        playing: data,
      };
      break;

    default:
      return state;
  }
};
export default reducer;
