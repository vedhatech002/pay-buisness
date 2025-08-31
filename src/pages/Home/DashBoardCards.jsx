import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Box,
  CircularProgress,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import QRCode from "../../components/common/QrCode";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Dummy Data
const settlements = [
  { name: "Ibrahim", amount: "+₹90", date: "23 Oct, 09:15 AM" },
  { name: "Ibrahim", amount: "+₹90", date: "23 Oct, 09:15 AM" },
  { name: "Ibrahim", amount: "+₹90", date: "23 Oct, 09:15 AM" },
];

export function ProfileCard() {
  const progress = 30;

  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: (t) => `1px solid ${t.palette.primary.border}`,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Title */}
        <Typography
          variant="overline"
          sx={{ fontWeight: 600, color: "text.text", letterSpacing: 1 }}
        >
          PROFILE
        </Typography>

        {/* Progress + Checklist */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            my: 1,
          }}
        >
          <Gauge
            width={170}
            height={170}
            value={progress}
            startAngle={-90}
            endAngle={270}
            cornerRadius="50%"
            text={`${progress}%`}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                fontWeight: 700,
                color: "#61CE70 !important", // 👈 force green
                fontFamily: "Gilroy, sans-serif", // 👈 use Gilroy font
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#61CE70",
              },
              [`& .${gaugeClasses.track}`]: {
                fill: "#e0e0e0",
              },
            }}
          />

          {/* Checklist */}
          <Box mt={3}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ color: (t) => t.palette.text.primary, fontSize: "20px" }}
            >
              Complete your profile
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Personal KYC
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Company KYC
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Onboarding details
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: (t) => t.palette.primary.main,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 500,
            py: 1.2,
            boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            fontSize: "16px",
          }}
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
}

export function QRCodeCard() {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: (t) => `1px solid ${t.palette.primary.border}`,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 600, color: "text.text", letterSpacing: 1 }}
        >
          QR
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            my: 2,
          }}
        >
          <QRCode
            value="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
            size={160}
          />

          <Box mt={3}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ color: (t) => t.palette.text.primary, fontSize: "20px" }}
            >
              Order QR
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Receive Payment
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Order new QRs
            </Typography>
            <Typography
              variant="body2"
              color="text.text"
              fontWeight={500}
              fontSize={"20px"}
            >
              • Download QR
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: (t) => t.palette.primary.main,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 500,
            py: 1.2,
            boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            fontSize: "16px",
          }}
        >
          View more
        </Button>
      </CardContent>
    </Card>
  );
}

export const SummaryCard = ({
  title,
  amount,
  items,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: (t) => `1px solid ${t.palette.primary.border}`,
      }}
    >
      <CardContent>
        {/* Title Row */}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography
              variant="overline"
              sx={{ fontWeight: 600, color: "text.text", letterSpacing: 1 }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Gilroy, sans-serif",
                fontSize: "20px",
              }}
            >
              ₹{amount}
            </Typography>
          </Box>
          <IconButton
            size="small"
            disableFocusRipple
            disableTouchRipple
            disableRipple
          >
            <KeyboardArrowRight />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 1.5 }} />

        {/* Item List */}
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 600, color: (t) => t.palette.text.primary }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "text.text",
                }}
              >
                {item.date}
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>+₹{item.amount}</Typography>
          </Box>
        ))}

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={onButtonClick}
          sx={{
            mt: 1.5,
            backgroundColor: "primary.main",
            textTransform: "none",
            borderRadius: 2,
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  );
};
