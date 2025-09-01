import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";

export default function SettlementCard({
  totalSettled = "₹1,45,000",
  pending = "₹12,000",
  nextSettlement = "Tomorrow, 9:00 AM",
  onViewAll = () => {},
}) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Settlements
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Total Settled</Typography>
          <Typography fontWeight={600}>{totalSettled}</Typography>
        </Box>
        <Divider />

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography color="text.secondary">Pending</Typography>
          <Typography fontWeight={600} color="warning.main">
            {pending}
          </Typography>
        </Box>
        <Divider />

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography color="text.secondary">Next Settlement</Typography>
          <Typography fontWeight={600}>{nextSettlement}</Typography>
        </Box>

        <Button
          size="small"
          variant="outlined"
          fullWidth
          sx={{ mt: 2, textTransform: "none" }}
          onClick={onViewAll}
        >
          View All
        </Button>
      </CardContent>
    </Card>
  );
}
