import React, { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, firmsSuccess } from '../features/stockSlice';
// import axios from "axios";
import useStockCall from "../hooks/useStockCall";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import FirmCard from "../components/ui/FirmCard";

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const dispatch = useDispatch()
  // const {token} = useSelector(state => state.auth)

  // const getFirms = async () => {
  //   dispatch(fetchStart())
  //   try {
  //     const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`,{
  //       headers:{
  //         Authorization: `Token ${token}`
  //         // Authorization: `Bearer ${accesstoken}` //* jwt için
  //       }
  //     })
  //     console.log(data)
  //     dispatch(firmsSuccess(data.data))
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail())
  //   }
  // }

  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("firms");
  }, []);

  const firms = useSelector((state) => state.stock.firms);

  return (
    <div>
      <Container>
        <Typography
          align="center"
          variant="h4"
          component="h1"
          color="secondary.second"
        >
          Firms
        </Typography>
        <Button variant="contained">New Firm</Button>
        <Grid container spacing={2}>
          {firms.map((firm) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
              <FirmCard {...firm} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Firms;
