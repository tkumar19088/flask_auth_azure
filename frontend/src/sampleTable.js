import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const CustomTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className="merged-cell" colSpan={2}>
            Merged Header
          </TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Subheader 1</TableCell>
          <TableCell>Subheader 2</TableCell>
          <TableCell>Subheader 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
          <TableCell>adasdasd</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CustomTable;
