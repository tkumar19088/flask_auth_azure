import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { updateerrormodalpopup } from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";

const ModalPopup = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.sidebar.errormodalopen);
  const errorText = useSelector((state) => state.sidebar.errortextmessage);

  const handleCloseErrorModal = () => {
    dispatch(updateerrormodalpopup(false));
  };
  return (
    <Modal open={true} onClose={handleCloseErrorModal}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          justifyContent: "center",
          textAlign: "center",
          border: "none",
        }}
      >
        <p style={{ color: "red" }}>{errorText}</p>
        <Button
          size="medium"
          variant="contained"
          // color="primary"
          onClick={handleCloseErrorModal}
          sx={{
            backgroundColor: "#415A6C",
            "&:hover": {
              backgroundColor: "#FF007F",
            },
          }}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default ModalPopup;
