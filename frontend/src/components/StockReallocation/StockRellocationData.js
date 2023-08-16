import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";

// import "./DataTable.css";

import { useNavigate } from "react-router-dom";
import StockReallocation from "./StockReallocation";
import { TextRotationAngledown } from "@mui/icons-material";
// import MyBreadcrumbs from "./MyBreadcrumbs";

const StockReallocationData = ({ onData }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      retailer: "Amazon",
      channel: "Pure Play",
      expctsellout: 100,
      expctsellin: "20",
      reckittsoh: "2000",
      retailersoh: "500",
      retailertagetsoh: "450",
      currentwoc: "2.1",
      retailertagetwoc: "4",
      pvnys: "100",
      activecamp: "Yes",
      cmuscore: 3.9,
      ssr: "N/A",
      ss: "200",
      sr: "20",
    },
    {
      retailer: "Tesco",
      channel: "Grocery",
      expctsellout: "45",
      expctsellin: "10",
      reckittsoh: "2000",
      retailersoh: "400",
      retailertagetsoh: "300",
      currentwoc: "3.5",
      retailertagetwoc: "4",
      pvnys: "200",
      activecamp: "Yes",
      cmuscore: 3.5,
      ssr: "20",
      ss: "-20",
      sr: "-20",
    },
    {
      retailer: "Amazon",
      channel: "Pure Play",
      expctsellout: 100,
      expctsellin: "20",
      reckittsoh: "2000",
      retailersoh: "500",
      retailertagetsoh: "450",
      currentwoc: "2.1",
      retailertagetwoc: "4",
      pvnys: "100",
      activecamp: "Yes",
      cmuscore: 3.9,
      ssr: "N/A",
      ss: "200",
      sr: "20",
    },
    {
      retailer: "Amazon",
      channel: "Pure Play",
      expctsellout: 100,
      expctsellin: "20",
      reckittsoh: "2000",
      retailersoh: "500",
      retailertagetsoh: "450",
      currentwoc: "2.1",
      retailertagetwoc: "4",
      pvnys: "100",
      activecamp: "Yes",
      cmuscore: 3.9,
      ssr: "N/A",
      ss: "200",
      sr: "-20",
    },
    {
      retailer: "Amazon",
      channel: "Pure Play",
      expctsellout: 100,
      expctsellin: "20",
      reckittsoh: "2000",
      retailersoh: "500",
      retailertagetsoh: "450",
      currentwoc: "2.1",
      retailertagetwoc: "4",
      pvnys: "100",
      activecamp: "Yes",
      cmuscore: 3.9,
      ssr: "N/A",
      ss: "200",
      sr: "20",
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRowsData, setselectedRowsData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const handleSort = (property) => {
    let direction = "asc";
    if (sortConfig.key === property && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[property] < b[property]) return direction === "asc" ? -1 : 1;
      if (a[property] > b[property]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key: property, direction });
  };
  // var selectedRowsData = [];
  const handleCheckboxChange = (event, skucode) => {
    if (skucode === "selectAll") {
      const checked = event.target.checked;
      const updatedData = data.map((item) => ({
        ...item,
        checkbox: checked,
      }));
      setData(updatedData);
      setSelectAll(checked);

      // setselectedRowsData((prevDataArray) => [...prevDataArray, data]);
      // selectedRowsData.push(data);
      onData(data);
    } else {
      const updatedData = data.map((item) => {
        if (item.skucode === skucode) {
          setselectedRowsData((prevDataArray) => [...prevDataArray, item]);
          selectedRowsData.push(item);
          onData(selectedRowsData);
          return { ...item, checkbox: event.target.checked };
        }
        return item;
      });
      setData(updatedData);
      setSelectAll(updatedData.every((item) => item.checkbox));
    }
  };

  const getSortSymbol = (property) => {
    if (sortConfig.key === property) {
      if (sortConfig.direction === "asc") {
        return <ArrowDropUpIcon fontSize="small" />;
      } else {
        return <ArrowDropDownIcon fontSize="small" />;
      }
    }
    return null;
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ border: "" }}>
      <TableContainer style={{ maxHeight: 730, width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Retailer
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Channel
              </TableCell>
              <TableCell
                style={{
                  textAlign: "center",
                }}
                className="sr-header"
              >
                Expct Sell-out
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Expct Sell-in
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Reckitt SOH
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Retailer SOH <br /> (current vs target)
              </TableCell>
              <TableCell
                style={{ textAlign: "center", width: "120px" }}
                className="sr-header"
              >
                Retailer WoC <br />
                (current vs target)
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Open PO
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                CMU Score
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                SOH safe to reallocate
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Suggested Supply
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="sr-header">
                Supply to Reallocate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={data[0].skucode}
              className={data[0].checkbox ? "checked-row" : ""}
              style={{
                backgroundColor: "rgb(237 216 218)",
              }}
            >
              <TableCell>{data[0].retailer}</TableCell>
              <TableCell>{data[0].channel}</TableCell>
              <TableCell>{data[0].expctsellout}</TableCell>
              <TableCell>{data[0].expctsellin}</TableCell>
              <TableCell>{data[0].reckittsoh}</TableCell>
              <TableCell>
                <Box display="flex" sx={{ marginLeft: "40px" }}>
                  <Typography fontSize={20}>{data[0].retailersoh}</Typography>
                  <Typography
                    fontSize={16}
                    sx={{
                      marginLeft: "12px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {data[0].retailertagetsoh}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" sx={{ marginLeft: "40px" }}>
                  <Typography fontSize={20}>{data[0].currentwoc}</Typography>
                  <Typography
                    fontSize={16}
                    sx={{
                      marginLeft: "12px",
                      marginTop: "10px",
                      color: "#6e8c78",
                    }}
                  >
                    {data[0].retailertagetwoc}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{data[0].pvnys}</TableCell>
              <TableCell>{data[0].cmuscore}</TableCell>
              <TableCell>{data[0].ssr}</TableCell>
              <TableCell>{data[0].ss}</TableCell>
              <TableCell>{data[0].sr}</TableCell>
            </TableRow>
            {data.map((item, index) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row" : ""}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>{item.retailer}</TableCell>
                <TableCell>{item.channel}</TableCell>
                <TableCell>{item.expctsellout}</TableCell>
                <TableCell>{item.expctsellin}</TableCell>
                <TableCell>{item.reckittsoh}</TableCell>
                <TableCell>
                  <Box display="flex" sx={{ marginLeft: "40px" }}>
                    <Typography fontSize={20}>{item.retailersoh}</Typography>
                    <Typography
                      fontSize={16}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item.retailertagetsoh}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ marginLeft: "40px" }}>
                    <Typography fontSize={20}>{item.currentwoc}</Typography>
                    <Typography
                      fontSize={16}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item.retailertagetwoc}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.pvnys}</TableCell>
                <TableCell>{item.cmuscore}</TableCell>
                <TableCell>{item.ssr}</TableCell>
                <TableCell>{item.ss}</TableCell>
                <TableCell>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        width: "25ch",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField variant="outlined" value={item.sr} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockReallocationData;
