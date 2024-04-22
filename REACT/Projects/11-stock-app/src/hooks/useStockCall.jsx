import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  // brandsSuccess,
  fetchFail,
  fetchStart,
  // firmsSuccess,
  getSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = useAxios()
  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(`${BASE_URL}firms`, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //         // Authorization: `Bearer ${accesstoken}` //* jwt için
  //       },
  //     });
  //     console.log(data);
  //     // dispatch(firmsSuccess(data.data));
  //     dispatch(getSuccess({data:data.data,url:"firms"}));
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
  //     console.log(data);
  //     // dispatch(brandsSuccess(data.data));
  //     dispatch(getSuccess({data:data.data,url:"brands"}));//* action creatorlar her zaman tek bir parametre kabul ederler
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };

  //* DRY
  //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}${url}`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //     // Authorization: `Bearer ${accesstoken}` //* jwt için
      //   },
      // });
      const { data } = await axiosWithToken(`${url}`);
      console.log(data);
      // dispatch(brandsSuccess(data.data));
      // dispatch(getSuccess({data:data.data,url:url}));//* action creatorlar her zaman tek bir parametre kabul ederler
      dispatch(getSuccess({ data: data.data, url })); //* action creatorlar her zaman tek bir parametre kabul ederler
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
 //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.
  const deleteStockData = async (url,id) => {
    dispatch(fetchStart());
    try {
      // await axios.delete(`${BASE_URL}${url}/${id}`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });
      await axiosWithToken.delete(`${url}/${id}`);
      // getStockData(url)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(url);
    }
  };

  return {
    // getFirms,
    // getBrands,
    deleteStockData,
    getStockData,
  };
};

export default useStockCall;
