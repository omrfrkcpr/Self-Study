import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../../hooks/useStockCall";
import FormTextField from "../TextFields/FormTextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const modalFields = [
  { name: "name", label: "Brand Name", type: "text" },
  { name: "image", label: "Image Url", type: "text" },
];

export default function FirmModal({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", info);

    if (info._id) {
      putStockData("brands", info);
    } else {
      postStockData("brands", info);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {modalFields.map((field) => (
              <FormTextField
                key={field.name}
                {...field}
                value={info[field.name]}
                onChange={handleChange}
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: `${info._id ? "green" : "indianred"}` }}
            >
              {info._id ? "Update Firm" : "Submit Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
