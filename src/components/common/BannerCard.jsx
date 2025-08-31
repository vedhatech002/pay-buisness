// src/components/home/BannerCard.jsx
import { Box, Button, Card, Typography } from "@mui/material";
import BillPaymentBanner from "../../assets/bill-payment.svg?react";
import PosBanner from "../../assets/pos.svg?react";
import { BANNER_CTA, BANNER_SUBTITLE } from "../../utils/constant";

export default function BannerCard({ isPosBanner }) {
  const handleCta = () => {
    console.log("Download now!");
  };

  return (
    <Card
      elevation={0}
      sx={{
        height: "190px",
        mb: 2,
        borderRadius: 2,
        overflow: "hidden",
        border: (t) => `1px solid ${t.palette.primary.main}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: 200,
        }}
      >
        <Box
          sx={{
            flex: "0 0 60%",
            bgcolor: "primary.main",
            color: "common.white",
            px: { xs: 1, md: 2 },
            py: 2,
            display: "flex",
            flexDirection: "column",
            clipPath: {
              xs: "none",
              md: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            lineHeight={1.3}
            fontSize={"35px"}
            sx={{ mb: 1 }}
          >
            Pay ₹1/month* for the QPay <br /> POS Device
          </Typography>

          <Typography
            variant="body2"
            sx={{ opacity: 0.9, color: (t) => t.palette.text.secondary }}
          >
            {BANNER_SUBTITLE}
          </Typography>

          <Button
            size="small"
            variant="contained"
            onClick={handleCta}
            sx={{
              mt: 1,
              bgcolor: "common.white",
              color: "primary.main",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.8rem",
              width: "fit-content",
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
          >
            {BANNER_CTA}
          </Button>
        </Box>

        {/* RIGHT SIDE (40%) */}
        <Box
          sx={{
            flex: "0 0 40%",
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // p: 2,
          }}
        >
          {isPosBanner ? (
            <PosBanner style={{ maxWidth: "100%", height: "auto" }} />
          ) : (
            <BillPaymentBanner style={{ maxWidth: "100%", height: "auto" }} />
          )}
        </Box>
      </Box>
    </Card>
  );
}
