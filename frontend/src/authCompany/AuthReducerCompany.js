const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        company: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        company: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        company: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        company: null,
        isFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
