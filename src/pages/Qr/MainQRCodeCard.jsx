import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { FileDownload, Share, ContentCopy } from "@mui/icons-material";
import QRCode from "../../components/common/QrCode";
import QpayLogo from "../../assets/Qpay.svg?react";
import DownloadIcon from "../../assets/download.svg?react";
import ShareIcon from "../../assets/share.svg?react";
import CopyIcon from "../../assets/copy.svg?react";

export default function MainQrCodeCard({
  qrUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
  upiId = "9876543210@qpay",
  name = "Ibrahim Mohammedali",
  onDownload,
  onShare,
  onCopy,
}) {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: (t) => `1px solid ${t.palette.primary.border}`,
      }}
    >
      <CardContent
        sx={{
          py: 3,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <Box mb={2}>
          <QpayLogo />
        </Box>

        {/* QR Code */}
        <Box my={2} display="flex" justifyContent="center">
          <QRCode value={qrUrl} size={300} />
        </Box>

        {/* UPI ID with copy */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={0.5}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            UPI ID: {upiId}
          </Typography>
          <IconButton size="small" sx={{ ml: 1 }} onClick={onCopy}>
            <CopyIcon />
          </IconButton>
        </Box>

        {/* User Name */}
        <Typography variant="body2" color="text.text" mb={3}>
          {name}
        </Typography>

        {/* Action Buttons */}
        <Box display="flex" gap={2} width="100%">
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            fullWidth
            sx={{
              py: 1,
              backgroundColor: "#EEEEEE",
              color: "black",
              textTransform: "none",
              boxShadow: "none",
              color: "text.primary",
              "&:hover": { backgroundColor: "#E0E0E0", boxShadow: "none" },
            }}
            onClick={onDownload}
          >
            Download
          </Button>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            fullWidth
            sx={{
              backgroundColor: "#EEEEEE",
              color: "black",
              textTransform: "none",
              boxShadow: "none",
              color: "text.primary",
              "&:hover": { backgroundColor: "#E0E0E0", boxShadow: "none" },
            }}
            onClick={onShare}
          >
            Share
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
