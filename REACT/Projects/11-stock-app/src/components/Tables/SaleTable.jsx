import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "../Commons/DataTable";

const SaleTable = ({ handleOpen, setInitialState }) => {
  const { deleteStockData } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return new Date(value).toLocaleString("de-DE");
      },
    },

    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return value?.name ?? "-No Brand-";
      },
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => {
        return value?.name ?? "-No Product-";
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInitialState({ brandId, price, quantity, productId, _id });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];
  return <DataTable rows={sales} columns={columns} />;
};

export default SaleTable;
