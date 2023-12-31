import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";
import { baseUrl } from "../../App";

export const login = async (company, dispatch) => {
  dispatch(loginStart);
  try {
    const res = await axios.post(baseUrl + "company/login", company);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure);
  }
};
export const Logout = (dispatch) => {
  dispatch(logout());
};
