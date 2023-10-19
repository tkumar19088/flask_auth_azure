import React, { useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import { useState, useMemo } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";
import "./ohr.css";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateloader,
  fetchstockreallocatedata,
  updateexporttabledata,
} from "../../store/actions/sidebarActions";

const Customeroverview = ({ onData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startingWeek = useSelector((state) => state.sidebar.currentWeekNumber);
  const [expandedRow, setExpandedRow] = useState(null);
  const [pushAlternative, setpushAlternative] = useState(false);
  const [campaignsData, setcampaignsData] = useState([]);
  const [pushAlternativeData, setpushAlternativeData] = useState([]);
  const [iscampaigns, setiscampaigns] = useState(false);
  const customerdata = useSelector(
    (state) => state.sidebar.overviewcustomerdata
  );

  console.log(customerdata);
  const data = useSelector((state) => state.sidebar.overviewcustomerdata);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div style={{ border: "" }}>
      <p>{data.length > 0 ? data[0]["RB SKU"] : "0"}</p>
      <TableContainer style={{ maxHeight: 691, width: "100%" }}>
        <Table>
          <TableHead className="t-head">
            <TableRow className="tablerow-title">
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                RB SKU
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                PPG
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                Description
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                }}
              >
                <Typography className="table-h1-title">Customer</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                }}
              >
                <Typography className="table-h1-title">Brand</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">Customer SoH</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">Customer WoC</Typography>
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  lineHeight: "16px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                Promo
              </TableCell>
              <TableCell
                rowSpan={2}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                  padding: "0px",
                  lineHeight: "16px",
                  textAlign: "center",
                  color: "#415A6C",
                }}
              >
                OLA
              </TableCell>

              <TableCell
                colSpan={4}
                sx={{
                  backgroundColor: "#E5EBEF",
                  border: "1px solid #dcdcdc",
                }}
              >
                <Typography className="table-h1-title">RAG Status</Typography>
              </TableCell>
            </TableRow>
            <TableRow className="t-row">
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  padding: "0px",
                }}
              >
                <Typography className="cw"> CW </Typography>
                <div className="brack-number">({startingWeek + 0})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                CW+1
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                CW+2
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #dcdcdc",
                  color: "#415A6C",
                  backgroundColor: "#E5EBEF",
                  textAlign: "center",
                  padding: "0px",
                }}
              >
                CW+3 <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="t-body">
            {data.map((item, index) => (
              <TableRow
                // /key={item["RB SKU"]}
                // className={item.checkbox ? "checked-row" : ""}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                  border: "1px solid #dcdcdc",
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: "13px",
                    // border: "1px solid",
                    padding: "10px",
                  }}
                >
                  {item.PPG}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "left",
                    fontSize: "13px",
                    padding: "5px",
                    maxWidth: "110px", // Set the maximum width of the TableCell
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Tooltip title={item.Description}>
                    {" "}
                    {/* Tooltip component with the full text */}
                    {truncateText(item.Description, 30)}
                  </Tooltip>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: "13px",
                    // border: "1px solid",
                    padding: "0px",
                  }}
                >
                  {item.Customer}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Customeroverview;
