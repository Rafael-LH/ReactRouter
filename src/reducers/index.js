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
      return {
        ...state,
        // action.payload es un id string el cual lo tenemos que convertir a numerico para que no nos marque error
        playing: state.myList.find(item => item.id === parseInt(action.payload, 10)) || // si lo hago con parseInt le tengo que pasar un segundo parametro que es limite de digitos
                 state.trends.find(item => item.id === Number(action.payload)) ||
                 state.originals.find(item => item.id === Number(action.payload)),
      };
      break;

    case 'SEARCH_REQUEST':
      let findSearch = {};
      findSearch = action.payload !== '' ? state.trends.filter(item => item.title.indexOf(action.payload) > -1) : {};
      findSearch = (Object.keys(findSearch).length <= 0 && action.payload !== '') ? state.originals.filter(item => item.title.indexOf(action.payload) > -1) : findSearch;

      return {
        ...state,
        search: findSearch,
      };
      break;
    default:
      return state;
  }
};
export default reducer;
