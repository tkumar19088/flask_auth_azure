import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Log from "../../images/Logout.png";
import qube from "../../images/qube.png";
import play from "../../images/play.png";
import down from "../../images/down.png";
import alert from "../../images/alert.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Sidebar.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mt } from "date-fns/locale";

const Sidebar = ({ filterStatus }) => {
  const navigate = useNavigate();
  const [isSelected, setisSelected] = useState(false);

  const handleFilterStatus = () => {
    setisSelected(true);
    filterStatus(true);
  };

  const handleDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header" onClick={handleDashboard}>
          <GridViewRoundedIcon
            sx={{
              height: { xs: 13, xl: 20 },
              mt: { xs: "-1px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 12, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Dashboard
          </Typography>
        </div>
        <div className="S-h2">
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 10, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Demand Planning
          </Typography>
        </div>
        <div className="S-h2">
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 10, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Demand Scenarios
          </Typography>
        </div>

        <div className="S-h2">
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 10, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Supply Planning
          </Typography>
        </div>

        <div style={{ marginBlock: "5%" }}>
          <Accordion className="acrdn-main">
            <AccordionSummary
              className="acrdn-s"
              // expandIcon={<ArrowDropDownIcon />}
              sx={{
                color: "#fff",
                backgroundColor: "#7E919F",
                height: "35px",
                borderRadius: "5px 5px 0px 0px",
                color: "#E7E9EE",
                height: { xs: "30px", lg: "35px", xl: "43px" },
                // marginTop: { xl: "16px" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ArrowDropDownRoundedIcon
                  sx={{
                    // border: "1px solid",
                    height: { xs: 32, xl: 40 },
                    width: { xs: 36, xl: 36 },
                    mt: { xs: "0px", lg: "-2px" },
                    ml: { xs: "-18px", xl: "1px" },
                  }}
                />
                <Typography
                  fontSize={{ lg: 13, xs: 9, xl: 18 }}
                  mt={{ xs: "10px", lg: "5px", xl: "7px" }}
                  width={{ lg: "100%", xs: "100%" }}
                  ml={{ xs: "-5px", xl: 1 }}
                >
                  Distribution Planning
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderBottom: "1px solid #B7C3CA ",
                backgroundColor: "#E7E9EE",
                // marginBottom: "-15px",
              }}
            >
              <Typography
                ml={{ xs: "13px", xl: "43px" }}
                // mx="14px"
                fontSize={{ lg: "12px", xs: 10, xl: 18 }}
                p="5px 0 0 0"
              >
                {" "}
                SKU Prioritization
              </Typography>
            </AccordionDetails>
            <AccordionDetails
              sx={{
                borderBottom: "1px solid #B7C3CA",
                backgroundColor: isSelected ? "rgb(70, 96, 114)" : "#E7E9EE",
                color: isSelected
                  ? "rgb(255, 255, 255)"
                  : "rgba(0, 0, 0, 0.87)",
                cursor: "pointer",
              }}
              className="selectedMenu"
              onClick={handleFilterStatus}
            >
              <Typography
                ml={{ xs: "13px", xl: "43px" }}
                width={{ lg: "100%", xs: "100%" }}
                fontSize={{ lg: 12, xs: 10, xl: 18 }}
                p="5px 0 0 0"
              >
                OOS Risk Detection
              </Typography>
            </AccordionDetails>
            <AccordionDetails sx={{ backgroundColor: "#E7E9EE" }}>
              <Typography
                ml={{ xs: "13px", xl: "43px" }}
                fontSize={{ lg: 12, xs: 9, xl: 18 }}
                p="5px 0 0 0"
                // border="1px solid"
                width={{ lg: "100%", xs: "110px" }}
              >
                Smart Stock Reallocation
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="S-h2" style={{ marginTop: "8%" }}>
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />{" "}
          <Typography
            fontSize={{ lg: 13, xs: 9, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Retrospective Analysis
          </Typography>
        </div>
        <div className="dotted-line"></div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 9, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Historical Runs
          </Typography>
        </div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <ReportProblemRoundedIcon
            sx={{
              height: { xs: 14 },
              mt: { xs: "-1px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />
          <Typography
            fontSize={{ lg: 13, xs: 9, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            Alerts
          </Typography>
        </div>
        <div className="S-h2" style={{ marginTop: "7%" }}>
          <PlayArrowRoundedIcon
            sx={{
              height: { xs: 15, xl: 24 },
              mt: { xs: "0px", lg: "-2px" },
              ml: { xs: "-10px", xl: 1 },
            }}
          />{" "}
          <Typography
            fontSize={{ lg: 13, xs: 9, xl: 18 }}
            ml={{ xs: "-5px", xl: 1 }}
          >
            {" "}
            Historical Activations
          </Typography>
        </div>

        {/* logout........... */}
      </div>

      <div className="log-box">
        <div className="logout-fixed">
          <img
            src={Log}
            alt="logout"
            className="logout-icon"
            // sx={{ height: { xl: 60 } }}
          />
          <Typography
            fontSize={{ xs: 14, lg: 14, xl: 18 }}
            mt={{ xs: 0, lg: 0, xl: "3px" }}
            ml={{ xs: 0, lg: 0, xl: 1 }}
          >
            Log out
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
