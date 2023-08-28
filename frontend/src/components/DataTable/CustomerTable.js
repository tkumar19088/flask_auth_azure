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

const CustomerTable = ({ onData }) => {
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
                OLA
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer inventory
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer WoC
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Customer Sell-out forecast
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Historic ePOS actuals
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                ePOS w-o-w variance
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Eventing data
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Reckitt Sell-in forecast (from RR)
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#E5EBEF ",
                  color: "#415A6C",
                  border: "1px solid #dcdcdc",
                }}
              >
                Reckitt Sell-in forecast From ATF
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.rbsku}>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.rbsku}</div>
                </TableCell>
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
                <TableCell>
                  <div className="alignment">{item.cw4}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.cw5}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerTable;
