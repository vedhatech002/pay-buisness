import React, { useState } from "react";
import MainQrCodeCard from "./MainQRCodeCard";
import { Box, Grid, Typography } from "@mui/material";
import QrCodeList from "./QrCodeList";

const qrData = [
  {
    id: "Q201946579",
    name: "All Marketing Sales",
    upi: "MSP01933511@APB90231",
    terminal: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
  },
  {
    id: "Q201946580",
    name: "Retail Collection",
    upi: "MSP01933512@APB90232",
    terminal: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
  },
  {
    id: "Q201946581",
    name: "Corporate Payments",
    upi: "MSP01933513@APB90233",
    terminal: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
  },
];

const Qr = () => {
  const [tab, setTab] = useState("");

  return (
    <Box px={2} overflow={"hidden"}>
      <Typography variant="h6" fontWeight={700} fontSize={"28px"} mb={2}>
        Manage QR/POS
      </Typography>
      <Grid container spacing={2}>
        {/* Left Side - Main QR */}
        <Grid size={6}>
          <MainQrCodeCard
          // qrValue="9876543210@apay"
          // merchantName="Merchant Name"
          />
        </Grid>

        {/* Right Side - Tabs */}
        <Grid size={6}>
          <QrCodeList
            activeTab={0}
            onTabChange={(e, val) => setTab(val)}
            qrList={qrData}
            onQrClick={(qr) => console.log("Clicked:", qr)}
            onRequestMore={() => console.log("Request more clicked")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Qr;
