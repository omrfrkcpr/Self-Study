import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React from "react";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "../Commons/DataTable";
import Loading from "../Commons/Loading";
import { useDeletePurchaseMutation, useGetPurchasesQuery } from "../../services/stocks";
const PurchaseTable = ({ handleOpen, setInitialState }) => {
  const { data: purchases, isLoading } = useGetPurchasesQuery();
  const [deletePurchase] = useDeletePurchaseMutation();

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE");
      },
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.firmId?.name ?? "-No Firm-";
      },
    },

    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.brandId?.name ?? "-No Brand-";
      },
    },
    {
      field: "productID",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row?.productId?.name ?? "-No Product-";
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
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInitialState({
                _id,
                brandId,
                productId,
                quantity,
                price,
                firmId,
              });
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deletePurchase(_id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];
  if (isLoading) return <Loading />;
  return <DataTable rows={purchases} columns={columns} />;
};

export default PurchaseTable;
