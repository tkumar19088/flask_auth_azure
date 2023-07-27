import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ExpandableTable = () => {
  // Sample data for the main table
  const rows = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      details: [
        { name: "aaa", title: "bbb" },
        { name: "aaa", title: "bbb" },
        { name: "aaa", title: "bbb" },
        { name: "aaa", title: "bbb" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      details: [
        { name: "bbb", title: "111" },
        { name: "bbb", title: "111" },
        { name: "bbb", title: "111" },
        { name: "bbb", title: "111" },
      ],
    },
    // Add more rows as needed
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  // Function to handle row click and expand/collapse accordion
  const handleRowClick = (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowId);
    }
  };

  // SubTable component to display the nested table
  const SubTable = ({ details }) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((detail, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
              }}
            >
              <TableCell>{detail.name}</TableCell>
              <TableCell>{detail.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={row.id}>
              {/* Main Table Row */}
              <TableRow
                onClick={() => handleRowClick(row.id)}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
              {/* Expanded Table Row */}
              {expandedRow === row.id && (
                <TableRow>
                  <TableCell colSpan={2}>
                    {/* Add your expanded table here */}
                    <SubTable details={row.details} />
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpandableTable;
