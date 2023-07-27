import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
// import "./Table.css";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Investigation = () => {
  return (
    <div>
      {" "}
      {/* <Grid container xs={12} md={12}> */}
      <Box mt={15} display="flex" fontSize={14}>
        <Box>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "30px 30px ",
              border: "#fff",
              marginTop: "-6px",
              //   fontSize: "14px",
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                height: "16px",
                width: "16px",
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "#FF007E",
                color: "#fff",
                padding: "1px",
                // marginTop: "-5px",
              }}
            />{" "}
            &#160; Back
          </Button>
        </Box>{" "}
        &#160;&#160;&#160;&#160;&#160;&#160;
        <Typography fontSize={14}>OOS Risk Dectection</Typography>
        <Typography>
          <ChevronRightIcon sx={{ height: "20px" }} />
        </Typography>
        <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
      </Box>
      <Box>
        <Typography
          mt={5}
          fontSize={28}
          fontWeight={500}
          fontFamily="inter"
          color="#415A6C"
        >
          Order Investigation
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "#fff",
          borderTop: "10px solid #dddddd",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        <table>
          <tr>
            {/* <th>
              <Box display="flex">
                <input type="checkbox" />
                <Box>
                  <ArrowDropDownIcon
                    sx={{
                      cursor: "pointer",
                      marginLeft: "-5px",
                    }}
                  />
                </Box>
              </Box>
            </th> */}
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>SKU</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>SKU Code</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>
                    Risk{" "}
                    <ErrorOutlineOutlinedIcon
                      sx={{
                        height: "15px",
                        color: "#FF007E",
                        marginLeft: "-5px",
                      }}
                    />
                  </Typography>
                  <Typography fontSize={14}>(1-10)</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontWeight={500} fontSize={14}>
                    Expected
                  </Typography>
                  <Typography fontWeight={500} fontSize={14}>
                    Net Revenue
                  </Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>Expected</Typography>
                  <Typography fontSize={14}>OLA</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>Cost</Typography>
                  <Typography fontSize={14}>to Serve</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center" color="#415A6C">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>Received </Typography>
                </Box>
              </Box>
            </th>
            <th></th>
          </tr>
          <tr>
            {/* <td>
              <input type="checkbox" className="click" />
            </td>{" "} */}
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                Airwick Electrical Lemon
              </Typography>
            </td>
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                234353656
              </Typography>
            </td>
            <td>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid",
                  padding: "4px",
                  backgroundColor: "#DD0000",
                  color: "#fff",
                }}
              >
                10
              </Box>
            </td>
            <td>
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td style={{ color: "#F08C2A" }}>84%</td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#DD0000",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                No
              </Box>
            </td>
            <td>
              <Box
                sx={{
                  borderRadius: "5px 5px",
                  border: "1px solid #415A6C",
                  padding: "4px",
                  display: "flex",
                  justifyContent: "space-around",
                  color: "#415A6C",
                }}
              >
                <Typography>INVESTIGATE</Typography>
                <Typography>
                  <PlayArrowIcon />
                </Typography>
              </Box>
            </td>
          </tr>
          <tr>
            {/* <td>
              <input type="checkbox" />
            </td> */}
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                Airwick Electrical Lavender
              </Typography>
            </td>
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                234353656
              </Typography>
            </td>
            <td>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#F08C2A",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                7
              </Box>
            </td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td style={{ color: "#F08C2A" }}>86%</td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#DD0000",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                No
              </Box>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  borderRadius: "5px 5px",
                  border: "1px solid #415A6C",
                  padding: "4px",
                  display: "flex",
                  justifyContent: "space-around",
                  color: "#415A6C",
                }}
              >
                <Typography>INVESTIGATE</Typography>
                <Typography>
                  <PlayArrowIcon />
                </Typography>
              </Box>
            </td>
          </tr>
          <tr>
            {/* <td>
              <input type="checkbox" />
            </td> */}
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                Airwick Aresol Floral
              </Typography>
            </td>
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                234353656
              </Typography>
            </td>
            <td>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#F08C2A",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                7
              </Box>
            </td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td style={{ color: "#F08C2A" }}>87%</td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#DD0000",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                No
              </Box>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  borderRadius: "5px 5px",
                  border: "1px solid #415A6C",
                  padding: "4px",
                  display: "flex",
                  justifyContent: "space-around",
                  color: "#415A6C",
                }}
              >
                <Typography>INVESTIGATE</Typography>
                <Typography>
                  <PlayArrowIcon />
                </Typography>
              </Box>
            </td>
          </tr>
          <tr>
            {/* <td>
              <input type="checkbox" />
            </td> */}
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                Airwick Aresol Lemon
              </Typography>
            </td>
            <td>
              <Typography color="#415A6C" fontSize={15} fontWeight={500}>
                234353656
              </Typography>
            </td>
            <td>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#F0CD28",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                6
              </Box>
            </td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td style={{ color: "#F08C2A" }}>84%</td>
            <td>
              {" "}
              <Typography color="#DD0000">(£5,749.00)</Typography>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  padding: "4px",
                  backgroundColor: "#DD0000",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                No
              </Box>
            </td>
            <td>
              {" "}
              <Box
                sx={{
                  borderRadius: "5px 5px",
                  border: "1px solid #415A6C",
                  padding: "4px",
                  display: "flex",
                  justifyContent: "space-around",
                  color: "#415A6C",
                }}
              >
                <Typography fontWeight={500}>INVESTIGATE</Typography>
                <Typography>
                  <PlayArrowIcon />
                </Typography>
              </Box>
            </td>
          </tr>
          {/* ................extra..... */}
        </table>
      </Grid>
      {/* </Grid> */}
    </div>
  );
};

export default Investigation;
