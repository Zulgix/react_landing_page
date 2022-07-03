import React from "react";
import { Modal, Grid } from "@mui/material";


const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.6)",
};

function MyModal({ open, onClose, currentImg }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Modal open={open} onClose={onClose} style={modalStyle}>
        <Grid item>
          <img
            onClick={onClose}
            src={currentImg}
            alt="ha"
            style={{ width: "800px", height: "800px" }}
          />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default MyModal;
