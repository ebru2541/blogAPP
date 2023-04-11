import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  changePasswordSuccess,
  changeUserSuccess,
} from "../features/authSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://33800.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  const changePassword = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(
        `users/auth/password/change/`,
        info
      );
      dispatch(changePasswordSuccess(data));

      toastSuccessNotify(` successfuly change`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(` can not be change`);
    }
  };

  const changeUserName = async (info) => {
    dispatch(fetchStart());
    try {
       const { data } =await axiosWithToken.put(`users/auth/user/`, info);
      dispatch(changeUserSuccess(data));
      toastSuccessNotify(` successfuly change name`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(` can not be change name`);
    }
  };

  return { login, register, logout, changePassword, changeUserName };
};

export default useAuthCall;
