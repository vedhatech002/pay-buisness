import { Box } from "@mui/material";

export default function QRCode({ value, size = 120 }) {
  return (
    <Box
      component="img"
      src={value}
      alt="QR Code"
      sx={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}
