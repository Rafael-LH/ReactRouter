const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, // me traigo mi estado que es todo mi JSON initialState
        myList: [ // que elemento voy actualizar que en este caso es mi lista
          ...state.myList, //con esto me traigo play list que se agregamo mas es que ya estaba agregado
          action.payload, //y con el action.payload me traigo toda la data que mando en mi componente CarouselItem
        ],
      };
      break;

    default:
      return state;
  }
};
export default reducer;
