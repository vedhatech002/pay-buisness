import { Box, Grid } from "@mui/material";

// Components
import BannerCard from "../../components/common/BannerCard";
import ProfileNavCard from "./ProfileNavCard";

// Assets
import BankIcon from "../../assets/bank.svg?react";
import KYCIcon from "../../assets/kyc.svg?react";
import BuisnessIcon from "../../assets/buisness.svg?react";
import OrderIcon from "../../assets/order.svg?react";
import SpeakerIcon from "../../assets/smartSpeaker.svg?react";
import PointOfSaleIcon from "../../assets/posmachine.svg?react";
import SettingsIcon from "../../assets/paysettings.svg?react";
import GroupIcon from "../../assets/managestaff.svg?react";
import LanguageIcon from "../../assets/language.svg?react";
import FeatureDisplaySection from "./FeatureDisplaySection";

const cardItems = [
  {
    icon: <BankIcon />,
    subtitle: "XXXX 9820",
    description: "ICICI Bank | Chennai Egmore Branch",
  },
  {
    icon: <BuisnessIcon />,
    subtitle: "Business Profile",
    description: "View and edit your business details",
  },
  {
    icon: <KYCIcon />,
    subtitle: "KYC Verification",
    description: "Unlock exclusive benefits with KYC",
  },

  {
    icon: <OrderIcon />,
    subtitle: "Order QR",
    description: "Get paid, manage & order QRs",
  },
];

const buisnessItems = [
  { icon: <SpeakerIcon />, label: "Smart Speaker" },
  { icon: <PointOfSaleIcon />, label: "POS Machine" },
];
const managebuisnessItems = [
  { icon: <SettingsIcon />, label: "Payment Settings" },
  { icon: <GroupIcon />, label: "Manage Staff" },
  { icon: <LanguageIcon />, label: "Change Language" },
];

const Profile = () => {
  return (
    <Box px={2}>
      <BannerCard isPosBanner={true} />

      <Grid container spacing={2} mt={3}>
        {cardItems.map((item, index) => (
          <Grid size={3} key={index}>
            <ProfileNavCard
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              onClick={() => console.log("Navigation")}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} mt={3}>
        <Grid size={6}>
          <FeatureDisplaySection
            title="Business Services"
            items={buisnessItems}
          />
        </Grid>
        <Grid size={6}>
          <FeatureDisplaySection
            title="Manage Business"
            items={managebuisnessItems}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
