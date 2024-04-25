import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { modalStyle } from "../../styles/globalStyle";

export default function StockModal({ open, handleClose, children }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </div>
  );
}
