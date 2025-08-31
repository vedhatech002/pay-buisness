import { Grid, Typography, Box } from "@mui/material";

const stats = [
  { label: "Account Holders", value: "1.5k" },
  { label: "Transactions", value: "2.1k" },
  { label: "Settlements", value: "2.3k" },
  { label: "QR Orders", value: "45k" },
];

export default function StatsGrid() {
  return (
    <Grid container spacing={2} my={2}>
      {stats.map((stat) => (
        <Grid item xs={6} md={3} key={stat.label}>
          <Box
            sx={{
              border: "1px solid #e5e5e5",
              borderRadius: 2,
              px: 7,
              py: 3,
              textAlign: "center",
              bgcolor: "white",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: "primary.main", fontSize: "40px" }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.text",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
