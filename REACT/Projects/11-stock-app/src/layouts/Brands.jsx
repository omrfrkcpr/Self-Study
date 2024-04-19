import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {
  const { getStockData } = useStockCall();
  useEffect(() => {
    // getBrands();
    getStockData("brands");
  }, []);
  return <div>Brands</div>;
};

export default Brands;
