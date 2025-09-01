import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const CustomTable = ({ columns, rows, renderRow }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        border: (t) => `1px solid ${t.palette.primary.border} `,
        borderRadius: "12px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: 600, color: (t) => t.palette.text.text }}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {renderRow(row)} {/* now works fine */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
