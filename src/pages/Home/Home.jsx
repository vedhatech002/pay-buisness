import { Grid, Box } from "@mui/material";
import BannerCard from "../../components/common/BannerCard";
import StatsGrid from "./StatsCard";
import { SummaryCard, ProfileCard, QRCodeCard } from "./DashBoardCards";

export default function Home() {
  return (
    <Box px={2}>
      {/* Banner */}
      <BannerCard />

      {/* Stats */}
      <StatsGrid />

      <Grid container spacing={2}>
        <Grid size={6}>
          <ProfileCard />
        </Grid>
        <Grid size={6}>
          <QRCodeCard />
        </Grid>
        <Grid size={6}>
          <SummaryCard
            title="SETTLEMENT"
            amount="1,23,816.19"
            items={[
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
            ]}
            buttonLabel="Settle Now"
            onButtonClick={() => console.log("Settle Now clicked")}
          />
        </Grid>
        <Grid size={6}>
          <SummaryCard
            title="TOTAL TRANSACTIONS"
            amount="1,23,816.19"
            items={[
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
              { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
            ]}
            buttonLabel="View All"
            onButtonClick={() => console.log("View All clicked")}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
