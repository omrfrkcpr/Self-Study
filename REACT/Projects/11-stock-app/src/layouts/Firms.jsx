import React, { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, firmsSuccess } from '../features/stockSlice';
// import axios from "axios";
import useStockCall from "../hooks/useStockCall";

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const dispatch = useDispatch()
  // const {token} = useSelector(state => state.auth)

  // const getFirms = async () => {
  //   dispatch(fetchStart())
  //   try {
  //     const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`,{
  //       headers:{
  //         Authorization: `Token ${token}`
  //         // Authorization: `Bearer ${accesstoken}` //* jwt için
  //       }
  //     })
  //     console.log(data)
  //     dispatch(firmsSuccess(data.data))
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail())
  //   }
  // }

  const { getFirms } = useStockCall();

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
