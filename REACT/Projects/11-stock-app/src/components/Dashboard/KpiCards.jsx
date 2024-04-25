// 'use client';
import { Card } from "@tremor/react";
import { useSelector } from "react-redux";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getTotals = (arr) => {
  return arr.reduce((acc, item) => acc + item.amount, 0);
};

export default function KpiCards() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = getTotals(sales);
  const totalPurchases = getTotals(purchases);

  const data = [
    {
      name: "Sales",
      value: `€ ${totalSales}`,
      //   change: '+6.1%',
      //   changeType: 'positive',
      color: "indigo",
    },
    {
      name: "Cash",
      value: `€ ${totalSales - totalPurchases}`,
      //   change: '+19.2%',
      //   changeType: 'positive',
      color: "amber",
    },
    {
      name: "Purchases",
      value: `€ ${totalPurchases}`,
      //   change: '-1.2%',
      //   changeType: 'negative',
      color: "fuchsia",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {data.map((item) => (
          <Card key={item.name} decoration="top" decorationColor={item.color}>
            <p className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              {/* <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span> */}
            </p>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
