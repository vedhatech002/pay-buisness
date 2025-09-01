import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Paper,
  Popover,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HistoryTable from "./components/HistoryTable";
import SettleNowDialog from "./components/SettleNowDialog";

const statusOptions = ["Pending", "Failed", "Success"];

const History = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleFilterClick = (event) => setAnchorEl(event.currentTarget);
  const handleFilterClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const handleStatusChange = (status) => {
    setFilterStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Settlement History
        </Typography>
        <Button variant="outlined">Download Statement</Button>
      </Box>

      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: 400,
            "& .MuiOutlinedInput-root": { borderRadius: "12px" },
          }}
        />

        <IconButton
          sx={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            width: 40,
            height: 40,
          }}
          onClick={handleFilterClick}
        >
          <FilterListIcon />
        </IconButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleFilterClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Box p={2}>
            {statusOptions.map((status) => (
              <MenuItem key={status} onClick={() => handleStatusChange(status)}>
                <Checkbox checked={filterStatus.includes(status)} />
                <ListItemText primary={status} />
              </MenuItem>
            ))}
          </Box>
        </Popover>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: "12px",
          backgroundColor: "#F1FAF1",
          borderColor: "#D5E8D4",
          mb: 3,
        }}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          <AccessTimeIcon sx={{ color: "green" }} />
          <Typography variant="body2">
            Today’s total collection will be auto-settled by{" "}
            <Typography component="span" fontWeight="bold">
              08:00AM, 23rd Oct’22
            </Typography>{" "}
            Tomorrow.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            borderRadius: "10px",
            px: 3,
            textTransform: "none",
          }}
          onClick={handleDialog}
        >
          Settle Now!
        </Button>
      </Paper>

      <HistoryTable searchQuery={searchQuery} filterStatus={filterStatus} />
      <SettleNowDialog open={isDialogOpen} onClose={handleDialog} />
    </Box>
  );
};

export default History;
