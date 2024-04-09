import { Grid } from '@mui/material'
import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = ({id,images,title,description}) => {

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345,height:400, display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={images[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" endIcon={<ShareIcon />}>
            Share
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard