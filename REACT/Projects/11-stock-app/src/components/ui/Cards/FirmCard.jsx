import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useStockCall from "../../../hooks/useStockCall";

export default function FirmCard({
  _id,
  name,
  address,
  image,
  phone,
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
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        component="img"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone : {phone}
        </Typography>
      </CardContent>

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
            setInitialState({ _id, name, phone, image, address });
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
          onClick={() => deleteStockData("firms", _id)}
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
