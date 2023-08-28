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

const StockPositionWeek = ({ onData }) => {
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
                </TableCell>{" "}
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

export default StockPositionWeek;
