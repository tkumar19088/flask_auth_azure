import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const ModalPopup = () => {
  const open = useState(true);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const errorText = useState("");
  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false); //dispatch call
  };
  return (
    <Modal open={open} onClose={handleCloseErrorModal}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p>{errorText}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCloseErrorModal}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default ModalPopup;
