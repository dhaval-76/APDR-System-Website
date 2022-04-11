export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
      };

    case actionTypes.REMOVE_USER:
      return {
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default reducer;
