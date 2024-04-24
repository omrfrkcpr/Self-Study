import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useStockCall from "../../../hooks/useStockCall";

function getRowId(row) {
  console.log(row);
  return row._id;
}
export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  // const rows = [
  //   { id: 1, firstName: 'Snow', lastName: 'Jon', age: 14 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 150,
      editable: false,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Category-";
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      // editable: false,
      headerAlign: "center",
      align: "center",
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Brand-";
      },
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        // console.log(params)
        <strong>
          <DeleteOutlineIcon
            onClick={() => deleteStockData("products", params?.id)}
            sx={{
              cursor: "pointer",
              marginTop: ".8rem",
              "&:hover": {
                color: "red",
                scale: "105%",
              },
            }}
          />
        </strong>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }} mt={4}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 25]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
