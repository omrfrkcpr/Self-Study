import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  // brandsSuccess,
  fetchFail,
  fetchStart,
  // firmsSuccess,
  getSuccess,
} from "../features/stockSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // base function for getting stock data based on url parameter
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
          // Authorization: `Bearer ${accesstoken}` //* jwt için
        },
      });
      console.log(data.data);
      dispatch(getSuccess({ data: data.data, url: url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${BASE_URL}firms`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //         // Authorization: `Bearer ${accesstoken}` //* jwt için
  //       },
  //     });
  //     console.log(data.data);
  //     // dispatch(firmsSuccess(data.data));
  //     dispatch(getSuccess({ data: data.data, url: "firms" }));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };
  // const getBrands = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${BASE_URL}brands`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //         // Authorization: `Bearer ${accesstoken}` //* jwt için
  //       },
  //     });
  //     console.log(data.data);
  //     dispatch(getSuccess({ data: data.data, url: "brands" }));
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };

  return { getStockData };
};

export default useStockCall;
