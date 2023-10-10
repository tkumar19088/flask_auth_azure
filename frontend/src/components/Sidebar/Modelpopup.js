import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import {
  updateloader,
  updatetabname,
  fetchoverviewhighriskdata,
  updateexporttabledata,
  fetchtaburl,
} from "../../store/actions/sidebarActions";
import { useSelector, useDispatch } from "react-redux";
import "./Modelpopup.css";

const BasicModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const apply = useSelector((state) => state.sidebar.apply);
  const searchValue = useSelector((state) => state.sidebar.searchvalue);

  const handleOpen = () => {
    if (apply) {
      fetchData();
    } else {
      setOpen(true);
    }
  };
  const fetchData = async () => {
    dispatch(updateloader(true));
    var data = {
      customer: 0,
      search: "",
      tabname: "overview",
      skulist: [],
      rbsku: "",
    };
    try {
      const url = "http://localhost:5000/getoverview";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        dispatch(updatetabname("overview"));
        dispatch(fetchoverviewhighriskdata(json));
        dispatch(updateexporttabledata(json));
        dispatch(fetchtaburl(url));
        navigate("/overviewhighrisk");
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch(updateloader(false));
    }
  };
  const handleClose = () => setOpen(false);
  const handleGotohome = () => {
    navigate("/sellinforecast");
  };
  return (
    <div>
      <Typography onClick={handleOpen} fontSize="13px">OOS Risk Detection</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ors-modelpopup">
          <Typography
            fontSize="16px"
            // id="modal-modal-title"
            // variant="h5"
            // component="h2"
            color="red"
            my="8px"
            mt="-4px"
          >
            Please Select Filters on the Home Page.
          </Typography>
          <Box
            sx={{
              display: "flex",
              textTransform: "none",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button className="btn-pop" size="small" onClick={handleGotohome}>
              Goto Homepage
            </Button>
            <Button className="btn-pop" size="small" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
