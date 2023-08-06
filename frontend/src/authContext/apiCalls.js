import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";
import { baseUrl } from "../App";

export const LoginUser = async (user, dispatch) => {
  dispatch(loginStart);
  try {
    const res = await axios.post(baseUrl + "auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure);
  }
};
export const Logout = (dispatch) => {
  dispatch(logout());
};
