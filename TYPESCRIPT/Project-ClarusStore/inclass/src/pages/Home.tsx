import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { VoidFunc } from "../models/models";
import { EventFunc, Product, Products } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList,favorites } = useAppSelector(
    (state) => state.products
  );

  //! her zaman type yazmak gereksiz kod fazlalığı.type inference:fonksiyona type vermediğimiz halde kendisi void olarak belirledi.
  const getData = async () => {
    dispatch(fetchStart());
    try {
      //!axios get işlemlerinde bu şekilde type tanımlarsak intellisense özellikleri işimizi kolaylaştırıyor.
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  console.log(error);
  useEffect(() => {
    getData();
  }, [search]);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }
  //! yukarıdaki gibi uzun uzun ve ilgili componentte de karşılarken yine uzun uzun yazmak yerine  models de func type tanımladık hem burada kullanabildik hem de componentte
  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product:Product) => {
    if(favorites.filter(item => item.id === product.id).length ===0){
      dispatch(addFavorites(product))
      toastSuccessNotify("Product added favorites!")
    }else {
      toastWarnNotify("Already added to favorites!")
    }
  }
  // const handleAdd:Voidfunc = (product) => {
  //   if (favorites.filter((item) => item.id === product.id).length === 0) {
  //     dispatch(addFavorites(product));
  //   }
  // };

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-52">
          <p className="text-center text-red-600">Products loading...</p>
        </div>
      ) : error ? (
        <div className="mt-52">
          <p className="text-center text-red-600">Something went wrong...</p>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {productsList.map((item) => <Card key={item.id} text="Add to favorites" item={item} handleFunc={handleAdd} />)}
        </div>
      )}
    </div>
  );
};

export default Home;


// fetchFail(state) {
//       state.error = true;
// }
//! aşağıdaki kullanımda fecthFail kısmının da üstteki şekilde düzenlenmesi lazım.
/* 
{loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Products loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )} 
*/
