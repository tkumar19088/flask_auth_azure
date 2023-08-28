import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Link, Typography, Paper } from "@mui/material";

const items = [
  {
    name: "Item 1",
    description: "Description for Item 1",
  },
  {
    name: "Item 2",
    description: "Description for Item 2",
  },
  {
    name: "Item 3",
    description: "Description for Item 3",
  },
];

const CarouselExample = ({ filterStatus = "false" }) => {
  const [selectedalert, setselectedalert] = useState(false);
  const handleFilterStatus = () => {
    filterStatus(true);
    setselectedalert(true);
  };
  return (
    <Carousel>
      {items.map((item, index) => (
        <Paper>
          <Grid
            item
            xs={4}
            onClick={handleFilterStatus}
            sx={{ cursor: "pointer" }}
          >
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: selectedalert
                  ? ""
                  : "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
                border: selectedalert ? "2px solid orange" : "",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <img
                    src={Error}
                    alt="error"
                    className="error-icon"
                    style={{ marginTop: "8px" }}
                  />{" "}
                </Box>
                <Box m={1}>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    OOS Risk Detection on Airwick
                  </Typography>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    {" "}
                    UK SKUs.
                    <Link
                      sx={{
                        textDecoration: "none",
                        color: "#7E919F",
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      Use cases
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginInline: "11px",
                  marginBottom: "5px",
                }}
                // marginBottom={{lg:1,xs:-1}}
              >
                <Box>
                  <Typography color="#415A6C" fontSize="12px">
                    OOS Risk Dectected
                  </Typography>
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    Airwick Electrical Lemon
                  </Typography>
                  <Typography
                    fontSize={{ lg: 14, xs: 12 }}
                    lineHeight={{ lg: "16px", xs: "16px" }}
                  >
                    Airwick Electrical Lavender
                  </Typography>
                  <Typography fontSize={{ lg: 14, xs: 12 }}>
                    Airwick Aersol Floral
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Typography color="#415A6C" fontWeight={500} fontSize="12px">
                    Expected OLA
                  </Typography>
                  <Typography
                    sx={{ marginBlock: "2px" }}
                    color="#F08C2A"
                    fontWeight={500}
                    fontSize={12}
                  >
                    84%
                  </Typography>
                  <Typography
                    color="#F08C2A"
                    fontWeight={500}
                    fontSize={12}
                    lineHeight={{ lg: "16px", xs: "12px" }}
                  >
                    86%
                  </Typography>
                  <Typography
                    sx={{ marginBlock: "2px" }}
                    color="#F08C2A"
                    fontWeight={500}
                    fontSize={12}
                  >
                    87%
                  </Typography>
                </Box>
              </Box>
            </Box>{" "}
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <img
                    src={Error}
                    alt="error"
                    className="error-icon"
                    style={{ marginTop: "8px" }}
                  />{" "}
                </Box>
                <Box m={1}>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    Vanish SKUs identified for
                  </Typography>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    promotion prioritisation
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box sx={{ marginInline: "20px", color: "#415A6C" }}>
                <Typography
                  fontSize={{ lg: 16, xs: 14 }}
                  lineHeight={{ lg: "20px", xs: "17px" }}
                >
                  Some SKUs have opportunity for promotion priotisation.{" "}
                </Typography>
              </Box>
            </Box>{" "}
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <img
                    src={Error}
                    alt="error"
                    className="error-icon"
                    style={{ marginTop: "8px" }}
                  />{" "}
                </Box>
                <Box m={1}>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    OOS Risk Detected on Finish
                  </Typography>
                  <Typography fontSize={{ lg: 18, xs: 13 }}>
                    UK SKUs{" "}
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box sx={{ marginInline: "20px", color: "#415A6C" }}>
                <Typography
                  fontStyle={{ lg: 16, xs: 13 }}
                  lineHeight={{ lg: "20px", xs: "17px" }}
                >
                  Some SKUs require actions due to OOS risk, press to inspect.{" "}
                </Typography>
              </Box>
            </Box>{" "}
          </Grid>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselExample;
