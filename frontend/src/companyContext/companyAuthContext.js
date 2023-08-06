import AuthReducer from "./AuthReducer";
import { createContext, useEffect, companyeducer } from "react";

const INITIAL_STATE = {
  company: JSON.parse(localStorage.getItem("company")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = companyeducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("company", JSON.stringify(state.company));
  }, [state.company]);
  return (
    <AuthContext.Provider
      value={{
        company: state.company,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
