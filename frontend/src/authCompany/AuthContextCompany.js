import AuthReducer from "./AuthReducerCompany";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  company: JSON.parse(localStorage.getItem("company")) || null,
  isFetching: false,
  error: false,
};

export const AuthContextCompany = createContext(INITIAL_STATE);

export const AuthContextCompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("company", JSON.stringify(state.company));
  }, [state.company]);
  return (
    <AuthContextCompany.Provider
      value={{
        company: state.company,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContextCompany.Provider>
  );
};
