import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebar from "./components/SidebarNew/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import BackupIcon from "@mui/icons-material/Backup";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  // Add more rows as needed
];

const TableWithAccordion = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleAccordionChange = (panelId) => {
    setExpandedId((prevExpandedId) =>
      prevExpandedId === panelId ? null : panelId
    );
  };

  return (
    <div>
      <Topbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      <Box display="flex">
                        <Box
                          sx={{
                            border: "1px solid",
                            // padding: "3px",
                            width: "100px",
                            borderRadius: "5px 5px",
                            display: "flex",
                            justifyContent: "space-around",
                            marginRight: "10px",
                            color: "#415A6C",
                            cursor: "pointer",
                          }}
                        >
                          <Typography mt="5px" fontSize="13px">
                            AMEND
                          </Typography>
                          <Typography>
                            <PlayArrowRoundedIcon
                              sx={{ height: "20x", marginTop: "2px" }}
                            />
                          </Typography>
                        </Box>
                        <Box
                          onClick={() => handleAccordionChange(row.id)}
                          // variant="contained"
                          // color="#E7E9EE"
                          // backgroundColor="#415A6C"
                          sx={{
                            backgroundColor: "#415A6C",
                            color: "#E7E9EE",
                            width: "100px",
                            display: "flex",
                            justifyContent: "space-around",
                            //   height: "35px",
                            borderRadius: "5px 5px",
                            textAlign: "center",
                            cursor: "pointer",
                            padding: "3px",
                            alignSelf: "center",
                          }}
                        >
                          <Typography fontSize="13px" mt="3px" mx="3px">
                            EXPORT
                          </Typography>
                          <Typography ml="5px">
                            <CloudUploadOutlinedIcon
                              sx={{ height: "18px", marginTop: "3px" }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                      {expandedId === row.id && (
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 1,
                            backgroundColor: "#fff",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                            padding: "7px",
                            marginLeft: "53px",
                            width: "150px",
                            borderRadius: "5px 5px",
                            border: "1px solid #E7E9EE",
                          }}
                        >
                          <Accordion
                            expanded={expandedId === row.id}
                            onChange={() => handleAccordionChange(row.id)}
                            sx={{
                              //   border: "1px solid red",
                              boxShadow: "0px 0px",
                            }}
                          >
                            <AccordionDetails sx={{ border: "" }}>
                              <Box
                                justifyContent="space-around"
                                sx={{
                                  display: "flex",
                                  height: "30px",
                                  border: "1px solid #FF007E",
                                  //   width: "90px",
                                  borderRadius: "5px 5px",
                                  color: "#FF007E",
                                  alignSelf: "center",
                                  marginBlock: "5%",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography mt="5px" fontSize="13px">
                                  KINAXIS
                                </Typography>{" "}
                                <BackupIcon
                                  sx={{ height: "18px", mt: "5px" }}
                                />
                              </Box>
                              <Box
                                justifyContent="space-around"
                                sx={{
                                  display: "flex",
                                  height: "30px",
                                  border: "1px solid #415A6C",
                                  //   width: "90px",
                                  borderRadius: "5px 5px",
                                  color: "#415A6C",
                                  alignSelf: "center",
                                  marginBlock: "5%",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography mt="5px" fontSize="13px">
                                  SAP
                                </Typography>{" "}
                                <BackupIcon
                                  sx={{
                                    height: "18px",
                                    mt: "5px",
                                    marginLeft: "26px",
                                  }}
                                />
                              </Box>
                              <Box
                                justifyContent="space-around"
                                sx={{
                                  display: "flex",
                                  height: "30px",
                                  border: "1px solid #415A6C",
                                  //   width: "90px",
                                  borderRadius: "5px 5px",
                                  color: "#415A6C",
                                  alignSelf: "center",
                                  marginBlock: "5%",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography mt="5px" fontSize="13px">
                                  CSV
                                </Typography>{" "}
                                <BackupIcon
                                  sx={{
                                    height: "18px",
                                    mt: "5px",
                                    marginLeft: "26px",
                                  }}
                                />
                              </Box>
                              <Box
                                justifyContent="space-around"
                                sx={{
                                  display: "flex",
                                  height: "30px",
                                  border: "1px solid #415A6C",
                                  //   width: "90px",
                                  borderRadius: "5px 5px",
                                  color: "#415A6C",
                                  alignSelf: "center",
                                  marginBlock: "5%",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography mt="5px" fontSize="13px">
                                  PDF
                                </Typography>{" "}
                                <BackupIcon
                                  sx={{
                                    height: "18px",
                                    mt: "5px",
                                    marginLeft: "26px",
                                  }}
                                />
                              </Box>

                              {/* Add more buttons as needed */}
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default TableWithAccordion;

<AccordionSummary

// expandIcon={<ExpandMoreIcon />}
>
  <Typography></Typography>
</AccordionSummary>;
