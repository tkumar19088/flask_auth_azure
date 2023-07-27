import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Table.css";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DataTable = () => {
  return (
    <div>
      <Box mt={15} display="flex" fontSize={14}>
        <Typography fontSize={14}>OOS Risk Dectection</Typography>
        <Typography>
          <ChevronRightIcon sx={{ height: "20px" }} />
        </Typography>
        <Typography fontSize={14}>Overview High-Risk SKUs</Typography>
      </Box>

      <Typography mt={5} fontSize={28} fontWeight={500} fontFamily="inter">
        Overview High-Risk SKUs
      </Typography>

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
            <th>
              <Box display="flex">
                <Checkbox {...label} />
                {/* <input type="checkbox" /> */}
                <Box>
                  <ArrowDropDownIcon
                    sx={{
                      cursor: "pointer",
                      marginLeft: "-5px",
                    }}
                  />
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center">
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
              <Box display="flex" alignItems="center">
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
              <Box display="flex" alignItems="center">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>Net Revenue</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center">
                <Box>
                  <Box>
                    <ArrowDropUpIcon
                      sx={{ cursor: "pointer", color: "#FF007E" }}
                    />
                  </Box>
                  {/* <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box> */}
                </Box>
                <Box>
                  <Typography fontSize={14}>Expected</Typography>
                  <Typography fontSize={14}>OLA</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center">
                <Box>
                  <Box>
                    <ArrowDropUpIcon sx={{ cursor: "pointer" }} />
                  </Box>
                  <Box marginTop="-20px">
                    <ArrowDropDownIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={14}>Best Seller</Typography>
                </Box>
              </Box>
            </th>
            <th>
              {" "}
              <Box display="flex" alignItems="center">
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
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" className="click" /> */}
              <Checkbox {...label} />
            </td>{" "}
            <td>Airwick Electrical Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td style={{ color: "#F08C2A" }}>84%</td>
            <td>High</td>
            <td>10</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Electrical Lavender</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td style={{ color: "#F08C2A" }}>86%</td>
            <td>High</td>
            <td>7</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Floral</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td style={{ color: "#F08C2A" }}>87%</td>
            <td>High</td>
            <td>7</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td style={{ color: "#F08C2A" }}>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          {/* ................extra..... */}
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Candle White Melon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Candle White Orange</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Candle Apple & Cinnamon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Candle Vanilla Almond Cookie</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              {/* <input type="checkbox" /> */}
              <Checkbox {...label} />
            </td>
            <td>Airwick Aresol Lemon</td>
            <td>234353656</td>
            <td>E.12,256</td>
            <td>84%</td>
            <td>Medium</td>
            <td>6</td>
          </tr>
        </table>
      </Grid>
    </div>
  );
};

export default DataTable;
