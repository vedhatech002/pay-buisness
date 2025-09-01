import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary" // 🔹 active page now uses theme primary color
      shape="circular"
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};

export default CustomPagination;
