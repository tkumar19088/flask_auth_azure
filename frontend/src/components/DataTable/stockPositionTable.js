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
import { useSelector } from "react-redux";

const startingWeek = 28;

const StockPosition = ({ onData }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const data = useSelector((state) => state.sidebar.reckittstockposition);

  // const [data, setData] = useState([
  //   {
  //     rbsku: "010613",
  //     ppg: "1234567",
  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  //   {
  //     rbsku: "010613",      ppg: "1234567",

  //     desc: "AWICK,IE,STICK UP LAVX12",
  //     rrsegment: "Adhesives (Air Care)",
  //     initsohweek: "743",
  //     cw: "3429",
  //     cw1: "0",
  //     cw2: "0",
  //     cw3: "2100",
  //   },
  // ]);

  return (
    <div>
      <TableContainer style={{ maxHeight: 705 }}>
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
                Initial Reckitt SoH
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
                <TableCell>
                  {" "}
                  <div className="alignment">{item["RB SKU"]}</div>
                </TableCell>{" "}
                <TableCell>
                  {" "}
                  <div className="alignment">{item.PPG}</div>
                </TableCell>{" "}
                <TableCell>
                  {" "}
                  <div className="alignment">{item.Description}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item.Brand}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item.initialsoh}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item["StkPos CW"]}</div>
                </TableCell>
                <TableCell>
                  {" "}
                  <div className="alignment">{item["StkPos CW+1"]}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item["StkPos CW+2"]}</div>
                </TableCell>
                <TableCell>
                  <div className="alignment">{item["StkPos CW+3"]}</div>
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
