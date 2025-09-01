import {
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QRCode from "../../components/common/QrCode";
import CustomTabs from "../../components/common/CustomTabs";
import { useState } from "react";
import QRStatusCard from "./QRStatusCard";

const dummyData = [
  {
    qrValue:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
    name: "All Marketing Sales",
    address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
    requestedOn: "26.04.2024",
    steps: [
      "QR Request Accepted",
      "Awaiting Production",
      "Awaiting Dispatch",
      "Awaiting Delivery",
    ],
    currentStep: 1,
  },
  {
    qrValue:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld",
    name: "Tech Supplies Ltd",
    address: "12, Mount Road, Chennai, 600002.",
    requestedOn: "15.05.2024",
    steps: [
      "QR Request Accepted",
      "Awaiting Production",
      "Awaiting Dispatch",
      "Awaiting Delivery",
    ],
    currentStep: 2,
  },
];

function QrCodeList({
  activeTab,
  onTabChange,
  qrList,
  onRequestMore,
  onQrClick,
}) {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    console.log("Active Tab:", newValue);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "12px",
        border: (t) => `1px solid ${t.palette.primary.border}`,
      }}
    >
      <CustomTabs
        tabs={[{ label: "Active QR Codes" }, { label: "QR Code Requests" }]}
        value={tab}
        onChange={handleChange}
      />

      {tab === 0 ? (
        <Box>
          {qrList.map((qr, idx) => (
            <Card
              key={idx}
              variant="elevation"
              sx={{
                //   mb: 0.5,
                borderRadius: "8px",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => onQrClick(qr)}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // py: 1,
                  "&:last-child": { pb: 1 },
                }}
              >
                <Box
                  sx={{
                    border: (t) => `1.5px solid ${t.palette.primary.border} `,
                    p: 1,
                    borderRadius: "8px",
                  }}
                >
                  <QRCode value={qr.url} size={60} />
                </Box>

                <Box flex={1} ml={2}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    fontSize={"18px"}
                  >
                    {qr.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.main"
                    fontSize={"14px"}
                  >
                    {qr.name} - {qr.upi}
                  </Typography>
                  <Typography variant="caption" color="text.text">
                    Terminal {qr.terminal}
                  </Typography>
                </Box>

                <IconButton size="small">
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        dummyData.map((item, index) => <QRStatusCard key={index} {...item} />)
      )}

      <Box textAlign="center" mt={2}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            backgroundColor: "primary.main",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={onRequestMore}
        >
          Request more QR Codes
        </Button>
      </Box>
    </Box>
  );
}

export default QrCodeList;
