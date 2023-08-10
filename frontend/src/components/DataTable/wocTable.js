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
  Grid,
} from "@mui/material";
import { useState } from "react";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import FunctionalTabs from "./FunctionalTabs";

// import "./DataTable.css";

import { useNavigate } from "react-router-dom";
// import MyBreadcrumbs from "./MyBreadcrumbs";
// import MyBreadcrumbs from "../../MyBreadcrumbs";

const startingWeek = 28;

const WocTable = ({ onData }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [data, setData] = useState([
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
    {
      rbsku: "010613",
      desc: "AWICK,IE,STICK UP LAVX12",
      rrsegment: "Adhesives (Air Care)",
      initsohweek: "743",
      cw: "3429",
      cw1: "0",
      cw2: "0",
      cw3: "2100",
      cw4: "6120",
      cw5: "107",
      cw6: "1052",
      cw7: "3200",
      cw8: "0",
      cw9: "298",
    },
  ]);

  return (
    <div>
      <TableContainer style={{ maxHeight: 730 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>RB SKU</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>RR Segment</TableCell>
              <TableCell>Initial SOH Week </TableCell>
              <TableCell>
                <div>CW</div>
                <div>({startingWeek})</div>
              </TableCell>
              <TableCell>
                <div>CW+1</div>
                <div className="brack-number">({startingWeek + 1})</div>
              </TableCell>
              <TableCell>
                <div>CW+2</div>
                <div className="brack-number">({startingWeek + 2})</div>
              </TableCell>
              <TableCell>
                <div>CW+3</div>
                <div className="brack-number">({startingWeek + 3})</div>
              </TableCell>
              <TableCell>
                <div>CW+4</div>
                <div className="brack-number">({startingWeek + 4})</div>
              </TableCell>
              <TableCell>
                <div>CW+5</div>
                <div className="brack-number">({startingWeek + 5})</div>
              </TableCell>
              <TableCell>
                <div>CW+6</div>
                <div className="brack-number">({startingWeek + 6})</div>
              </TableCell>
              <TableCell>
                <div>CW+7</div>
                <div className="brack-number">({startingWeek + 7})</div>
              </TableCell>
              <TableCell>
                <div>CW+8</div>
                <div className="brack-number">({startingWeek + 8})</div>
              </TableCell>
              <TableCell>
                <div>CW+9</div>
                <div className="brack-number">({startingWeek + 9})</div>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.rbsku}>
                <TableCell>{item.rbsku}</TableCell>
                <TableCell>{item.desc}</TableCell>
                <TableCell>{item.rrsegment}</TableCell>
                <TableCell>{item.initsohweek}</TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw1}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.cw2}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.cw3}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.cw4}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw5}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.cw6}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.cw7}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw8}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw9}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WocTable;
