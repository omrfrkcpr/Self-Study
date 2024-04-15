import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://18102.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // Burada login işlemi yapılacak, örnek olarak POST isteği atıyorum
      const { data } = await axios.post(
        "https://18102.fullstack.clarusway.com/auth/login",
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://18102.fullstack.clarusway.com/auth/logout",
        userInfo
      );
      dispatch(logoutSuccess(data));
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { register, login, logout };
};

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.
