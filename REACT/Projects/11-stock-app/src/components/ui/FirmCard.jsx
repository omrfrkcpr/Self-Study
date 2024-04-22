import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../../hooks/useStockCall";

export default function FirmsCard({
  _id,
  name,
  address,
  phone,
  image,
  // createdAt,
  // updatedAt,
}) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        height: "390px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
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
        sx={{ height: 140, objectFit: "contain", padding: ".5rem" }}
        component="img"
        image={image}
        title={`${name}-logo`}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}
      >
        <EditIcon sx={{ cursor: "pointer" }} />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer" }}
          onClick={() => deleteStockData("firms", _id)}
        />
      </CardActions>
    </Card>
  );
}
