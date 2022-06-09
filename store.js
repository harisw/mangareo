function reducer(state = {username: null,
    token: null,
    email: null}, action) {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          username: action.username,
          token: action.token,
          email: action.email
        };
      case "SIGN_OUT":
        return {
          ...state,
          username: null,
          token: null,
          email: null
        };
      default:
        return state;
    }
  }
  
  export default reducer;