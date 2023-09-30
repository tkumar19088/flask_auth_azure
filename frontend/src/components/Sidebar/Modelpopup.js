import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Modelpopup.css";

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography onClick={handleOpen}>OOS Risk Detection</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ors-modelpopup">
          <Typography
            // id="modal-modal-title"
            variant="h5"
            // component="h2"
            color="red"
            my="8px"
            mt="-4px"
          >
            Please Select Filters on the Home Page !
          </Typography>
          <Box
            sx={{
              display: "flex",
              textTransform: "none",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button className="btn-pop" size="small">
              Goto Homepage
            </Button>
            <Button className="btn-pop" size="small">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
