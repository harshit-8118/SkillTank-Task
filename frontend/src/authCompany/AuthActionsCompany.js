export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (company) => ({
  type: "LOGIN_SUCCESS",
  payload: company,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// logout
export const logout = () => ({
  type: "LOGOUT",
});
