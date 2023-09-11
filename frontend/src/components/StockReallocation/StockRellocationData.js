import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StockReallocationData = ({ onData }) => {
  const navigate = useNavigate();

  // const [data, setData] = useState([]);

  const stockreallocationData = useSelector(
    (state) => state.sidebar.stockreallocation
  );
  const suggectedRecord = useSelector((state) => state.sidebar.suggectedRecord);
  const updateresults = useSelector((state) => state.sidebar.updateresults);
  const initialData = stockreallocationData.map((obj) => ({
    ...obj, // Copy the existing properties of the object
    testReallocation: "", // Add the new key-value pair
  }));
  // setData(results);
  const [data, setData] = useState(initialData);
  console.log(data);
  const [inputValues, setInputValues] = useState(initialData.map(() => ""));

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (updateresults) {
      if (!isUpdating) {
        // Check if an update is not already in progress
        setIsUpdating(true); // Set a flag to indicate that an update is in progress

        const updatedData = data.map((item, index) => {
          if (inputValues[index] !== "") {
            const currentallocation =
              item.currentallocation - inputValues[index];
            const remainingallocation =
              currentallocation - item.allocationconsumed;
            return {
              ...item,
              currentallocation: currentallocation,
              remainingallocation: remainingallocation,
            };
          } else {
            return item;
          }
        });

        setData(updatedData);

        // Reset the flag after the update
        setIsUpdating(false);
      }
    }
  }, [updateresults, data, inputValues, isUpdating]);

  // const [data, setData] = useState([
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "600",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.X",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  //   {
  //     customer: "Amazon",
  //     channel: "Pureplay",
  //     sellinforecastartefact: "300",
  //     sellinforecastreckitt: "500",
  //     currentallocation: "200.Y",
  //     allcConsumedDate: "50",
  //     remAllocation: "150",
  //     openOrders: "50",
  //     expectServiceLevel: "100%",
  //     custSohcurrent: "500",
  //     custSohTarget: "600",
  //     custWoccurrent: "300",
  //     custWocTarget: "400",
  //     price: "£6.00",
  //     cmuScore: "4.4",
  //     stockSafeRealloc: "100",
  //     idealallocation: "400",
  //     suggAlloc: "100",
  //     testReallocation: "20",
  //   },
  // ]);
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
    // setData(sortedData);
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
      // setData(updatedData);
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
      //setData(updatedData);
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
      <TableContainer style={{ maxHeight: 477, width: "100%" }}>
        <Table stickyHeader className="stockReallocation">
          <TableHead>
            <TableRow>
              <TableCell className="stable-header">Customer</TableCell>
              <TableCell className="stable-header">Channel</TableCell>
              <TableCell className="stable-header">
                Sell-In Forecast <br />
                (Artefact vs Reckitt)
              </TableCell>
              <TableCell className="stable-header">
                Current Allocation
              </TableCell>
              <TableCell className="stable-header">
                Allocation consumed to date
              </TableCell>
              <TableCell className="stable-header">
                Remaining allocation
              </TableCell>
              <TableCell className="stable-header">Open orders</TableCell>
              <TableCell className="stable-header">
                Expected Service level
              </TableCell>
              <TableCell className="stable-header">
                Customer SOH <br />
                (current vs target)
              </TableCell>
              <TableCell className="stable-header">
                Customer WoC <br />
                (current vs target)
              </TableCell>
              <TableCell className="stable-header">CMU Score</TableCell>
              <TableCell className="stable-header">
                Stock safe to reallocate
              </TableCell>
              <TableCell className="stable-header">
                Ideal Allocation Values
              </TableCell>
              <TableCell className="stable-header">
                Suggested Allocation
              </TableCell>
              <TableCell className="stable-header">
                Test reallocation scenario
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length == 0 && (
              <TableRow>
                <TableCell
                  colSpan={20}
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  No Records Found
                </TableCell>
              </TableRow>
            )}
            {data.length > 0 && (
              <TableRow className="s-row1">
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.Customer}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.Channel}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>
                      {suggectedRecord["sif-atf"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["sif-reckitt"]}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.currentallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                    width: 80,
                  }}
                >
                  {suggectedRecord.allocationconsumed}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.remainingallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.openorders}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.expectedservicelevel}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          suggectedRecord["custsoh-current"] >=
                          suggectedRecord["custsoh-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {suggectedRecord["custsoh-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["custsoh-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          suggectedRecord["custwoc-current"] >=
                          suggectedRecord["custwoc-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {suggectedRecord["custwoc-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {suggectedRecord["custwoc-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.cmuscore}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.stocksafetoreallocate}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.idealallocationvalues}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                  }}
                >
                  {suggectedRecord.suggestedallocation}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "rgb(198 223 215)",
                    textAlign: "center",
                    // padding: "0px",
                  }}
                >
                  0
                </TableCell>
              </TableRow>
            )}

            {data.map((item, index) => (
              <TableRow
                key={item.skucode}
                className={item.checkbox ? "checked-row" : ""}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>{item.Customer}</TableCell>
                <TableCell>{item.Channel}</TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{item["sif-atf"]}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {item["sif-reckitt"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  {item.currentallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.allocationconsumed}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.remainingallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.openorders}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.expectedservicelevel}
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          item["custsoh-current"] >= item["custsoh-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {item["custsoh-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {item["custsoh-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography
                      fontSize={15}
                      sx={{
                        color:
                          item["custwoc-current"] > item["custwoc-target"]
                            ? "green"
                            : "red",
                      }}
                    >
                      {item["custwoc-current"]}
                    </Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        fontWeight: "600",
                        color: "#6e8c78",
                      }}
                    >
                      {item["custwoc-target"]}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.cmuscore}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.stocksafetoreallocate}
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  {item.idealallocationvalues}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.suggestedallocation}
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        width: "10ch",
                        height: "2ch",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <input
                      type="number"
                      value={inputValues[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
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
