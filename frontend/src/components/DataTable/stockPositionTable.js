import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const startingWeek = 28;

const StockPosition = ({ onData }) => {
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
    },
  ]);

  return (
    <div>
      <TableContainer style={{ maxHeight: 730 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
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
                RR Segment
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.rbsku}>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.rbsku}</div>
                </TableCell>{" "}
                <TableCell>
                  {" "}
                  <div className="alignment">{item.desc}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.rrsegment}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.initsohweek}</div>
                </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockPosition;
