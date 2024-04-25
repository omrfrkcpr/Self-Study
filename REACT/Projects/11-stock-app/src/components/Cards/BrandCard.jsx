import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { btnStyle, flex } from "../../styles/globalStyle";

const BrandCard = ({ name,image,_id, handleOpen, setInitialState }) => {
  const { deleteStockData } = useStockCall();

  return (
    <Card
      elevation={10}
      sx={{
        p: 2,
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}>
      <CardHeader title={name} />

      <CardMedia
        image={image}
        sx={{ p: 1, objectFit: "contain", height: "250px" }}
        component="img"
        alt={name}
        title={name}
      />

      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInitialState({name,image,_id});
            handleOpen();
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("brands",_id)}
        />
      </CardActions>
    </Card>
  );
};

export default BrandCard;
