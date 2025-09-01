// SettleNowDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SettleNowDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      {/* Custom Header with Close Icon */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        pt={2}
      >
        <Typography variant="h6" fontWeight="bold">
          Manage QR/POS
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent dividers sx={{ px: 3, pt: 2 }}>
        {/* Today's Total Collection */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <AccountBalanceIcon />
            <Typography fontWeight={600}>Today's Total Collection</Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold">
            ₹1,023
          </Typography>
        </Box>

        {/* Already Settled */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <CheckCircleIcon sx={{ color: "green" }} />
          <Typography fontWeight={600} color="green">
            Already Settled
          </Typography>
        </Box>
        <Typography fontWeight={600} color="green" mb={2} ml={4}>
          ₹100
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Settlement Calculation Section */}
        <Typography
          fontSize={13}
          fontWeight={600}
          color="text.secondary"
          mb={1}
        >
          SETTLEMENT CALCULATION
        </Typography>

        <Box mb={1}>
          <Typography fontSize={14}>Amount yet to be settled</Typography>
          <Typography fontWeight={600} fontSize={14} textAlign="right" mt={-2}>
            ₹923
          </Typography>
        </Box>

        <Box mb={1}>
          <Typography fontSize={14}>Past pending amount</Typography>
          <Typography fontWeight={600} fontSize={14} textAlign="right" mt={-2}>
            ₹0
          </Typography>
        </Box>

        <Box mb={1}>
          <Typography fontSize={14}>Charges</Typography>
          <Typography fontWeight={600} fontSize={14} textAlign="right" mt={-2}>
            ₹0
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* User Info */}
        <Box mb={2}>
          <Typography fontWeight={600}>IBRAHIM MOHAMMEDALI</Typography>
          <Typography fontSize={14}>092141241127</Typography>
          <Typography fontSize={14}>07, Aug 2024</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Final total collection */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <AccountBalanceIcon />
            <Typography fontWeight={600}>Today's Total Collection</Typography>
          </Box>
          <Typography fontWeight="bold" variant="h6">
            ₹1,023
          </Typography>
        </Box>

        {/* Info Banner */}
        <Box
          bgcolor="#E6F4EA"
          p={2}
          borderRadius="10px"
          textAlign="center"
          mt={1}
        >
          <Typography variant="body2">
            Tap ‘Settle Now’ to instantly get settlements in your bank account.
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="green">
            Settle Now is Chargeable
          </Typography>
        </Box>
      </DialogContent>

      {/* Bottom Button */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            py: 1.2,
          }}
        >
          Settle Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettleNowDialog;
