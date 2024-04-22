import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

const Purchases = () => {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("firms");
  }, []);

  const firms = useSelector((state) => state.stock.firms);
  return <div>Purchases</div>;
};

export default Purchases;
