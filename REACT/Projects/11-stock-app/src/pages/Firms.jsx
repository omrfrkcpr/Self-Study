import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, firmsSuccess } from '../features/stockSlice';
// import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import FirmCard from "../components/Cards/FirmCard";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import FirmForm from "../components/Forms/FirmForm";
import useStockCall from "../hooks/useStockCall";

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

  const {
    // getFirms,
    getStockData,
  } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };
  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  console.log("firms:", firms);
  console.log("firms:", initialState);
  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      {/* <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Firms
      </Typography> */}
      <PageHeader text="Firms" />
      {/* <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button> */}
      <MyButton variant="contained" onClick={handleOpen} title="New Firm" />
      <Grid container spacing={2} mt={3}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <FirmForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
    </Container>
  );
};

export default Firms;
