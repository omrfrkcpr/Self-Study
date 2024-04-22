import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {
  const {
    // getBrands,
    getStockData,
  } = useStockCall();
  useEffect(() => {
    // getBrands()
    getStockData("brands");
  }, []);
  return <div>Brands</div>;
};

export default Brands;
