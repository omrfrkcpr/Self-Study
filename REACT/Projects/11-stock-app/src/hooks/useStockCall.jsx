import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  // brandsSuccess,
  fetchFail,
  fetchStart,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  // firmsSuccess,
  getSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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
      toastSuccessNotify("Operation succes");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error?.response?.data?.message || "Operation not success")
    } finally {
      getStockData(url);
    }
  };

  const postStockData = async (url,info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}`,info);
      // getStockData(url)
      toastSuccessNotify("Operation succes");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error?.response?.data?.message || "Operation not success")
    } finally {
      getStockData(url);
    }
  };
  const putStockData = async (url,info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`,info);
      // getStockData(url)
      toastSuccessNotify("Operation succes");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error?.response?.data?.message || "Operation not success")
    } finally {
      getStockData(url);
    }
  };

  //!Promise.all()
  //* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.
  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      // const [a,b] = [1,2] // array destructuring
      const [products,categories,brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ])
      dispatch(getProCatBrandSuccess([products?.data?.data,categories?.data?.data,brands?.data?.data]))
    } catch (error) {
      dispatch(fetchFail());
    }
  }
  const getProSalBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, brands, sales] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`brands/`),
        axiosWithToken.get(`sales/`),
      ]);

      dispatch(
        getProSalBrandsSuccess([products?.data, brands?.data, sales?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProPurcFirBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, purchases, firms, brands] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`purchases/`),
        axiosWithToken.get(`firms/`),
        axiosWithToken.get(`brands/`),
      ]);

      dispatch(
        getProPurcFirBrandsSuccess([
          products?.data,
          purchases?.data,
          firms?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return {
    // getFirms,
    // getBrands,
    deleteStockData,
    putStockData,
    postStockData,
    getStockData,
    getProCatBrand,
    getProSalBrands,
    getProPurcFirBrands
  };
};

export default useStockCall;


//* promise.all
// Eğer sayfanın yüklenmesi için birbirine bağımlı olmayan birden fazla asenkron işlemi tamamlamanız gerekiyorsa, Promise.all() bu durum için ideal bir yöntemdir. Promise.all() kullanarak birden fazla bağımsız işlemi paralel olarak başlatabilir ve tüm işlemlerin tamamlanmasını bekleyebilirsiniz. Bu, sayfanızın daha hızlı yüklenmesine yardımcı olur çünkü işlemler eş zamanlı olarak gerçekleştirilir ve en uzun süren işlem kadar beklersiniz.
// API isteğini eş zamanlı olarak yapar ve hepsi tamamlandığında sonuçları alır. Herhangi bir hata durumunda, işlemlerden birinde hata oluşursa, catch bloğu hatayı yakalar. Bu yöntemle, sayfanın yüklenme süresi, tek tek sırayla yüklemek yerine, en uzun süren isteğin süresi ile sınırlı kalır, bu da genel performansı artırır.
