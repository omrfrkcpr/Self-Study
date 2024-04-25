import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `€ ${Intl.NumberFormat("us").format(number).toString()}`;

const getData = (data) => {
  return data.map((item) => ({
    date: new Date(item.createdAt).toLocaleString(),
    category: item.amount,
  }));
};

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = getData(sales);
  const purchasesData = getData(purchases);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["category"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["category"]}
          colors={["rose"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
        />
      </Grid>
    </Grid>
  );
}
