import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStockCall from "../../../hooks/useStockCall";

export default function BrandCard({
  _id,
  name,
  image,
  handleOpen,
  setInitialState,
}) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        height: 390,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        component="img"
        image={image}
        title={name}
      />
      <CardActions
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <EditIcon
          onClick={() => {
            handleOpen();
            setInitialState({ _id, name, image });
          }}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "orange",
              scale: "125%",
            },
          }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteStockData("brands", _id)}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "red",
              scale: "125%",
            },
          }}
        />
      </CardActions>
    </Card>
  );
}
