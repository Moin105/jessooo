const initialState = {
    show: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW-NAV':
        return {
          ...state,
          show: true,
        };
      case 'HIDE-NAV':
        return {
          ...state,
          show: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;