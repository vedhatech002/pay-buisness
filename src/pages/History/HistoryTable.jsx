import React, { useEffect, useState } from "react";
import { Chip, Button, TableCell, Typography } from "@mui/material";

import PhonePeLogo from "../../assets/phonepe.svg";
import PaytmLogo from "../../assets/paytm.svg";
import GPayLogo from "../../assets/google-pay-logo.svg";

import CustomTable from "../../components/common/CustomTable";
import CustomPagination from "../../components/common/CustomPagination";
import { AuthServices } from "../../api/AuthServices";

const logoMap = {
  PhonePe: PhonePeLogo,
  Paytm: PaytmLogo,
  "Google Pay": GPayLogo,
};

const statusColors = {
  Pending: { color: "warning", label: "Pending" },
  Failed: { color: "error", label: "Failed" },
  Success: { color: "success", label: "Success" },
};

const columns = [
  "NAME",
  "DATE & TIME",
  "ACCOUNT",
  "AMOUNT",
  "STATUS",
  "DETAILS",
];
const HistoryTable = ({ searchQuery, filterStatus }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredRows = transactions.filter((row) => {
    const matchesSearch = row.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus.length === 0 || filterStatus.includes(row.status);
    return matchesSearch && matchesFilter;
  });

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getTransactions = async () => {
    try {
      const data = await AuthServices.getTransactions();
      setTransactions(data);
      console.log("fetched data", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("effect called");
    getTransactions();
  }, []);

  useEffect(() => {
    if ((page - 1) * rowsPerPage >= filteredRows.length) {
      setPage(1);
    }
  }, [filteredRows, page]);

  return (
    <>
      <CustomTable
        columns={columns}
        rows={paginatedRows}
        renderRow={(row) => (
          <React.Fragment>
            <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
            <TableCell sx={{ fontWeight: 500 }}>{row.date}</TableCell>
            <TableCell>
              From{" "}
              <img
                src={logoMap[row.account]}
                alt={row.account}
                style={{ width: 20, marginLeft: 4, verticalAlign: "middle" }}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }}>{row.amount}</TableCell>
            <TableCell>
              <Chip
                label={statusColors[row.status].label}
                color={statusColors[row.status].color}
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "6px", // small radius instead of pill
                  px: 1.5, // a bit of horizontal padding
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            </TableCell>
            <TableCell>
              <Button
                variant="text"
                size="small"
                sx={{
                  color: "green",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                View
              </Button>
            </TableCell>
          </React.Fragment>
        )}
      />
      {filteredRows.length === 0 && (
        <Typography textAlign={"center"} variant="h6" py={6}>
          No data found
        </Typography>
      )}

      {filteredRows.length > rowsPerPage && (
        <CustomPagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      )}
    </>
  );
};

export default HistoryTable;
