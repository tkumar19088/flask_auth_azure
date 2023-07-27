import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import play from "../../images/play.png";
// import "./AirwickElectrical.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Linechart from "../../Linechart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./HorizontalSimilarities.css";

const HorizontalSimilarities = () => {
  return (
    <div>
      {" "}
      <Typography fontSize={28} sx={{ marginBlock: "6px" }}>
        Historical Similarities
      </Typography>
      <Grid container spacing={2} item xs={12} display="flex">
        <Grid item xs={4}>
          <Box className="pln-cards-header">
            <Typography color="#E7E9EE">Same SKU</Typography>
          </Box>{" "}
          <Box className="aw-body"
        //    onClick={handleClick}
           >
            <Box>
              <Box>
                <Typography fontSize={16}>Airwick Electrical Lemon</Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 01/01/23</Typography> &#160;&#160;
                <button className="btn-aw">best Scenario</button>
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>Airwick Electrical Lemon</Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 01/01/23</Typography> &#160;&#160;
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>Airwick Electrical Lemon</Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 05/11/23</Typography> &#160;&#160;
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box className="pln-cards-header">
            <Typography color="#E7E9EE">Similar SKU Group</Typography>
          </Box>{" "}
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>
                  Airwick Electrical Lavender
                </Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 11/04/22</Typography> &#160;&#160;
                <button className="btn-aw">best Scenario</button>
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>
                  Airwick Electrical Lavender
                </Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 01/04/21</Typography> &#160;&#160;
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box className="pln-cards-header">
            <Typography color="#E7E9EE">Similar Retailers</Typography>
          </Box>{" "}
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>
                  Asda:Airwick Electrical Lemon
                </Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 11/04/22</Typography> &#160;&#160;
                <button className="btn-aw">best Scenario</button>
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
          <Box className="aw-body">
            <Box>
              <Box>
                <Typography fontSize={16}>
                  Tsco:Airwick Electrical Lemon
                </Typography>
              </Box>

              <Box display="flex" textAlign="left" mt="2px">
                <VisibilityOutlinedIcon
                  sx={{
                    height: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                    marginLeft: "-7px",
                  }}
                />
                &#160;
                <Typography> 01/04/21</Typography> &#160;&#160;
              </Box>
            </Box>
            <Box className="pln-cards-cnt">
              <img src={play} alt="square" className="square-icon" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HorizontalSimilarities;
