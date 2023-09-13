import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const startingWeek = 28;

const Sellout = ({ onData }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const data = useSelector((state) => state.sidebar.customersellout);

  // const [data, setData] = useState([
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",
  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     brand: "Adhesives (Air Care)",

  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //     cw4: "6120",
  //     cw5: "107",
  //     cw6: "1052",
  //     cw7: "3200",
  //     cw8: "0",
  //     cw9: "298",
  //   },
  // ]);

  return (
    <div>
      <TableContainer style={{ maxHeight: 705 }}>
        <Table stickyHeader>
          <TableHead className="supply-tablehead">
            <TableRow className="supply-tablerow">
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                RB SKU
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                PPG
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Brand
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Initial SOH Week{" "}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW</div>
                <div>({startingWeek})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+1</div>
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+2</div>
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+3</div>
                <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+4</div>
                <div className="brack-number">({startingWeek + 4})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+5</div>
                <div className="brack-number">({startingWeek + 5})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+6</div>
                <div className="brack-number">({startingWeek + 6})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+7</div>
                <div className="brack-number">({startingWeek + 7})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+8</div>
                <div className="brack-number">({startingWeek + 8})</div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                <div>CW+9</div>
                <div className="brack-number">({startingWeek + 9})</div>{" "}
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
            {data.map((item) => (
              <TableRow key={item["RB SKU"]}>
                <TableCell sx={{ width: "80px" }}>
                  <div className="alignment">{item["RB SKU"]}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.PPG}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.Description}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.Customer}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.Brand}</div>
                </TableCell>
                <TableCell sx={{ width: "90px" }}>
                  <div className="alignment">{item["InitalSOH Week"]}</div>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw1}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw1}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw2}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw2}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw3}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw3}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw4}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw4}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw5}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw5}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw6}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw6}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw7}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw7}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw8}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw8}
                    </Typography>
                  </Box>
                </TableCell>{" "}
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box display="flex" sx={{ paddingLeft: "15px" }}>
                    <Typography fontSize={15}>{data[0].cw9}</Typography>
                    <Typography
                      fontSize={13}
                      sx={{
                        marginLeft: "12px",
                        marginTop: "10px",
                        color: "#6e8c78",
                      }}
                    >
                      {data[0].cw9}
                    </Typography>
                  </Box>
                </TableCell>{" "}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sellout;
