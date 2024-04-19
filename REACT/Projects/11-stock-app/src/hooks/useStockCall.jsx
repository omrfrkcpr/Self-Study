import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, firmsSuccess } from "../features/stockSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}firms`, {
        headers: {
          Authorization: `Token ${token}`,
          // Authorization: `Bearer ${accesstoken}` //* jwt için
        },
      });
      console.log(data);
      dispatch(firmsSuccess(data.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getFirms };
};

export default useStockCall;
