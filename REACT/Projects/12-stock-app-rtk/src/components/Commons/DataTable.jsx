import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

function getRowId(row) {
  return row._id;
}

const DataTable = ({ rows, columns }) => {
  return (
    <Box sx={{ width: "100%", marginTop: "1rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        slots={{
          toolbar: GridToolbar,
        }}
        autoHeight
        pageSizeOptions={[5, 10, 15, 25, 50]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
